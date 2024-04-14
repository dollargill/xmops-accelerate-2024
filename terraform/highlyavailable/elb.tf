resource "aws_lb" "wp_alb" {
  name               = "wp-alb"
  internal           = false
  load_balancer_type = "application"
  security_groups    = [aws_security_group.elb_sg.id]
  subnets            = [aws_subnet.wp_subnet1.id, aws_subnet.wp_subnet2.id]

  enable_deletion_protection = false

  tags = {
    Name = "wp_alb"
  }
}

resource "aws_lb_listener" "wp_alb_listener" {
  load_balancer_arn = aws_lb.wp_alb.arn
  port              = 80
  protocol          = "HTTP"

  default_action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.wp_alb_tg.arn
  }
}

resource "aws_lb_target_group" "wp_alb_tg" {
  name     = "wp-alb-tg"
  port     = 80
  protocol = "HTTP"
  vpc_id   = aws_vpc.wp_vpc.id

  health_check {
    enabled             = true
    healthy_threshold   = 3
    unhealthy_threshold = 3
    timeout             = 5
    interval            = 30
    path                = "/"
    protocol            = "HTTP"
    matcher             = "200"
  }
}

