output "WordPress_URL" {
  value = aws_instance.app_server.public_ip
}
