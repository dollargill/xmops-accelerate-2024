resource "aws_rds_cluster" "wp_db_cluster" {
  engine                 = "aurora-mysql"
  engine_version         = "8.0.mysql_aurora.3.06.0"
  db_subnet_group_name   = aws_db_subnet_group.wp_db_subnet_group.name
  master_username        = "dollargill"
  master_password        = "Bitcoin2030"
  skip_final_snapshot    = true

  tags = {
    Name = "MyWPRDSCluster"
  }
}

resource "aws_rds_cluster_instance" "wp_db_instance1" {
  identifier         = "wp-db-instance1"
  cluster_identifier = aws_rds_cluster.wp_db_cluster.id
  instance_class     = "db.t3.medium" 
  engine             = "aurora-mysql"
}

resource "aws_rds_cluster_instance" "wp_db_instance2" {
  identifier         = "wp-db-instance2"
  cluster_identifier = aws_rds_cluster.wp_db_cluster.id
  instance_class     = "db.t3.medium" 
  engine             = "aurora-mysql"
}


resource "aws_db_subnet_group" "wp_db_subnet_group" {
  name       = "wpdbsubnetgroup"
  subnet_ids = [aws_subnet.wp_subnet1.id, aws_subnet.wp_subnet2.id]

  tags = {
    Name = "MyWPDBSubnetGroup"
  }
}
