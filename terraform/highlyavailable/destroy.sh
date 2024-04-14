#!/bin/bash
# destroy.sh

# Navigate to the correct directory that contains the Terraform configuration
cd "$1"

# Run Terraform destroy
terraform destroy --auto-approve
