resource "aws_efs_file_system" "wp_efs" {
  creation_token = "wp_efs"

  tags = {
    Name = "wpEFS"
  }
}

resource "aws_efs_mount_target" "wp_efs_mt1" {
  file_system_id  = aws_efs_file_system.wp_efs.id
  subnet_id       = aws_subnet.wp_subnet1.id
  security_groups = [aws_security_group.wp_sg.id]
}

resource "aws_efs_mount_target" "wp_efs_mt2" {
  file_system_id  = aws_efs_file_system.wp_efs.id
  subnet_id       = aws_subnet.wp_subnet2.id
  security_groups = [aws_security_group.wp_sg.id]
}
