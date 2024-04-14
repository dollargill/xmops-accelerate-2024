# Define the VPC
resource "aws_vpc" "wp_vpc" {
  cidr_block           = "10.0.0.0/16"
  enable_dns_support   = true
  enable_dns_hostnames = true

  tags = {
    Name = "wp_vpc"
  }
}

# Define Subnets within the VPC
resource "aws_subnet" "wp_subnet1" {
  vpc_id            = aws_vpc.wp_vpc.id
  cidr_block        = "10.0.1.0/24"
  availability_zone = "us-east-1a"

  tags = {
    Name = "wp_subnet1"
  }
}

resource "aws_subnet" "wp_subnet2" {
  vpc_id            = aws_vpc.wp_vpc.id
  cidr_block        = "10.0.2.0/24"
  availability_zone = "us-east-1b"

  tags = {
    Name = "wp_subnet2"
  }
}

# Define the Security Group within the VPC for the EC2 Instances
resource "aws_security_group" "wp_sg" {
  vpc_id = aws_vpc.wp_vpc.id

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "wp_sg"
  }
}

# Define the Security Group for the ELB within the same VPC
resource "aws_security_group" "elb_sg" {
  vpc_id = aws_vpc.wp_vpc.id

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "elb_sg"
  }
}

# Internet Gateway for the VPC
resource "aws_internet_gateway" "wp_igw" {
  vpc_id = aws_vpc.wp_vpc.id

  tags = {
    Name = "wp_igw"
  }
}

# Route Table for Internet Access
resource "aws_route_table" "wp_rt" {
  vpc_id = aws_vpc.wp_vpc.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.wp_igw.id
  }

  tags = {
    Name = "wp_rt"
  }
}

# Associate Subnets with Route Table
resource "aws_route_table_association" "wp_rta_subnet1" {
  subnet_id      = aws_subnet.wp_subnet1.id
  route_table_id = aws_route_table.wp_rt.id
}

resource "aws_route_table_association" "wp_rta_subnet2" {
  subnet_id      = aws_subnet.wp_subnet2.id
  route_table_id = aws_route_table.wp_rt.id
}
