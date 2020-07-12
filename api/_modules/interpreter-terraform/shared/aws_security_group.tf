
resource "aws_vpc" "vpc_main" {
  cidr_block           = "10.0.0.0/16"
  enable_dns_support   = true 
  enable_dns_hostnames = true 
  enable_classiclink   = false
  instance_tenancy     = "default"
}

resource "aws_subnet" "subnet_for_cluster" {
  vpc_id                  = aws_vpc.vpc_main.id
  cidr_block              = "10.0.1.0/16"
  map_public_ip_on_launch = true 
  availability_zone       = "us-east-1a"

  tags = {
    Name = "Subnet for Webservers"
  }
}

resource "aws_internet_gateway" "gw" {
  vpc_id = aws_vpc.vpc_main.id
}


resource "aws_route_table" "prod-public-crt" {
  vpc_id = aws_vpc.vpc_main.id
  route {
    cidr_block = "0.0.0.0/0" 
    gateway_id = aws_internet_gateway.gw.id
  }

}



resource "aws_route_table_association" "prod-crta-public-subnet-1" {
  subnet_id      = aws_subnet.subnet_for_cluster.id
  route_table_id = aws_route_table.prod-public-crt.id
}

resource "aws_security_group" "allow_all_traffic" {
  name        = "all_traffic"
  description = "Allow SSH inbound traffic"
  vpc_id      = aws_vpc.vpc_main.id
  ingress {
    from_port = 1
    to_port   = 65535
    protocol  = "tcp"
    cidr_blocks = ["0.0.0.0/0"] 
  }
  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
    
  }

}
