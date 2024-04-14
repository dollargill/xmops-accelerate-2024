output "WordPress_URL" {
  description = "URL to access WordPress site"
  value       = "${aws_lb.wp_alb.dns_name}/wp-admin/install.php"
}
