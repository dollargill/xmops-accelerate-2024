terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.0"
    }
  }
}

provider "aws" {
  region = "us-east-1" # Adjust this to your preferred AWS region
}

resource "aws_lightsail_instance" "wordpress_instance" {
  name              = "WordPressInstance"
  blueprint_id      = "wordpress"  # Lightsail's WordPress blueprint
  bundle_id         = "nano_2_0"   # Adjust based on your desired plan
  availability_zone = "us-east-1a" # Ensure this matches your region

  tags = {
    Name = "WordPressInstance"
  }
}

resource "aws_lightsail_static_ip" "wordpress_static_ip" {
  name = "WordPressStaticIP"
}

resource "aws_lightsail_static_ip_attachment" "attach_static_ip" {
  static_ip_name = aws_lightsail_static_ip.wordpress_static_ip.name
  instance_name  = aws_lightsail_instance.wordpress_instance.name
}
