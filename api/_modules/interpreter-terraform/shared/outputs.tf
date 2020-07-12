
output "instance_public_ip_addresses_workers" {
  value = {
    for instance in aws_instance.workers:
    instance.id => instance.public_ip
  }
}