resource "aws_vpc" "wordpress_vpc" {
    cidr_block           = "10.0.0.0/16"
    enable_dns_support   = true
    enable_dns_hostnames = true

    tags = {
        Name = "wordpress-vpc"
    }
}

resource "aws_subnet" "wordpress_subnet_1" {
    vpc_id                  = aws_vpc.wordpress_vpc.id
    cidr_block              = "10.0.1.0/24"
    availability_zone       = "us-east-1a"
    map_public_ip_on_launch = true  # Enable auto-assign public IP

    tags = {
        Name = "wordpress-subnet-1"
    }
}

resource "aws_subnet" "wordpress_subnet_2" {
    vpc_id            = aws_vpc.wordpress_vpc.id
    cidr_block        = "10.0.2.0/24"
    availability_zone = "us-east-1b"

    tags = {
        Name = "wordpress-subnet-2"
    }
}

resource "aws_db_subnet_group" "wordpress_db_subnet_group" {
    name       = "wordpress-db-subnet-group"
    subnet_ids = [aws_subnet.wordpress_subnet_1.id, aws_subnet.wordpress_subnet_2.id]

    tags = {
        Name = "wordpress-db-subnet-group"
    }
}

resource "aws_internet_gateway" "wordpress_igw" {  
    vpc_id = aws_vpc.wordpress_vpc.id

    tags = {
        Name = "wordpress-igw"
    }
}

resource "aws_route_table" "wordpress_rt" {
    vpc_id = aws_vpc.wordpress_vpc.id

    route {
        cidr_block = "0.0.0.0/0"
        gateway_id = aws_internet_gateway.wordpress_igw.id
    }

    tags = {
        Name = "wordpress-rt"
    }
}

# Associate the route table with the first subnet
resource "aws_route_table_association" "wordpress_rta_1" {
    subnet_id      = aws_subnet.wordpress_subnet_1.id
    route_table_id = aws_route_table.wordpress_rt.id
}

# Associate the route table with the second subnet
resource "aws_route_table_association" "wordpress_rta_2" {
  subnet_id      = aws_subnet.wordpress_subnet_2.id
  route_table_id = aws_route_table.wordpress_rt.id
}
