provider "aws" {
    region = "us-east-1"
}

terraform {
  backend "s3" {
    bucket = "mypgs-devtooling-dev.tfstate"
    key    = "hack-a-pg-prod/terraform.tfstate"
    region = "us-east-1"
  }
}