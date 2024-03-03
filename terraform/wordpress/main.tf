provider "aws" {
  region = "us-east-1"
}

resource "aws_security_group" "allow_web" {
  name        = "allow_web_traffic"
  description = "Allow web inbound traffic"

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["49.179.117.44/32"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_instance" "wordpress" {
  ami                    = "ami-0c7217cdde317cfec" # Make sure to replace this with the correct Ubuntu AMI ID
  instance_type          = "t2.micro"
  key_name               = "monolith"
  vpc_security_group_ids = [aws_security_group.allow_web.id]

  user_data = <<-EOF
    #!/bin/bash
    sudo apt update && sudo apt upgrade -y
    sudo apt install -y apache2
    sudo systemctl start apache2
    sudo systemctl enable apache2
    sudo apt install -y php libapache2-mod-php php-mysql php-gd php-xml
    sudo apt install -y mariadb-server
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

  tags = {
    Name = "WordPressInstance"
  }
}

output "wordpress_instance_public_ip_with_wp_config" {
  value = "${aws_instance.wordpress.public_ip}/wp-config.php"
}

