resource "aws_launch_template" "wp_lt" {
  name_prefix   = "wp-launch-template-"
  image_id      = "ami-080e1f13689e07408" # Ensure this is correct for your region and needs
  instance_type = "t3.medium"

  network_interfaces {
    associate_public_ip_address = true
    security_groups             = [aws_security_group.wp_sg.id]
  }

  user_data = base64encode(<<-EOF
    #!/bin/bash
    sudo apt update && sudo apt upgrade -y
    sudo apt install -y apache2
    sudo systemctl start apache2
    sudo systemctl enable apache2
    sudo apt install -y php libapache2-mod-php php-mysql php-gd php-xml
    sudo apt-get install -y mariadb-server
    sudo systemctl start mariadb
    sudo systemctl enable mariadb

    sudo mysql -e "DELETE FROM mysql.user WHERE User='';"
    sudo mysql -e "DELETE FROM mysql.user WHERE User='root' AND Host NOT IN ('localhost', '127.0.0.1', '::1');"
    sudo mysql -e "DROP DATABASE IF EXISTS test;"
    sudo mysql -e "DELETE FROM mysql.db WHERE Db='test' OR Db='test\\_%';"
    sudo mysql -e "FLUSH PRIVILEGES;"

    sudo mysql -e "CREATE DATABASE sample_wp_db DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;"
    sudo mysql -e "CREATE USER 'sample_wp_user'@'localhost' IDENTIFIED BY 'SampleSecurePass123!';"
    sudo mysql -e "GRANT ALL ON sample_wp_db.* TO 'sample_wp_user'@'localhost';"
    sudo mysql -e "FLUSH PRIVILEGES;"

    cd /var/www/html
    sudo wget https://wordpress.org/latest.tar.gz
    sudo tar -xzf latest.tar.gz --strip-components=1
    sudo rm -f latest.tar.gz
    sudo chown -R www-data:www-data /var/www/html
    sudo cp wp-config-sample.php wp-config.php
    sudo sed -i "s/database_name_here/sample_wp_db/" wp-config.php
    sudo sed -i "s/username_here/sample_wp_user/" wp-config.php
    sudo sed -i "s/password_here/SampleSecurePass123!/" wp-config.php
    sudo systemctl restart apache2
    echo "WordPress installation script has completed. Access your site with the EC2 instance's public IP address."
  EOF
  )

}
resource "aws_autoscaling_group" "wp_asg" {
  name_prefix               = "wp-asg-"
  min_size                  = 2
  max_size                  = 5
  desired_capacity          = 2
  health_check_grace_period = 300
  health_check_type         = "ELB"  # Ensure this aligns with your health check strategy
  vpc_zone_identifier       = [aws_subnet.wp_subnet1.id, aws_subnet.wp_subnet2.id]
  launch_template {
    id      = aws_launch_template.wp_lt.id
    version = "$Latest"
  }

  target_group_arns         = [aws_lb_target_group.wp_alb_tg.arn]  # Add this line

  tag {
    key                 = "Name"
    value               = "wp-instance"
    propagate_at_launch = true
  }

  lifecycle {
    create_before_destroy = true
  }
}
