#!/bin/bash
cd "$(dirname "$0")" || exit
terraform init
terraform apply -auto-approve
