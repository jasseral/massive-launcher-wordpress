provider "aws" {
  profile = var.profile
  region  = var.region
}


resource "aws_instance" "workers" {
  count = var.workers
  ami                         = var.image_id
  instance_type               = var.instance_type_workers
  subnet_id                   = aws_subnet.subnet_for_cluster.id
  vpc_security_group_ids      = [aws_security_group.allow_all_traffic.id]
  associate_public_ip_address = true
  key_name                    = aws_key_pair.my_pair_key.key_name
  
  tags = {
    Name = "worker${count.index}"
  }

     connection {
    type        = "ssh"
    user        = "ubuntu"
    private_key = file("~/.ssh/aws")
    host        = self.public_ip
  }

  
  provisioner "remote-exec" {
    inline = [
      "cat /etc/lsb-release"
    ]
  }

  
}



