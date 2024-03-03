output "wordpress_instance_public_ip" {
  description = "The public IP address of the WordPress Lightsail instance."
  value       = aws_lightsail_static_ip.wordpress_static_ip.ip_address
}
