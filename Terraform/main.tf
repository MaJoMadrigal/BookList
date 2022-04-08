provider "aws" {
    region = "us-east-1"
}

terraform {
  backend "s3" {
    bucket = "mypgs-sandbox.tfstate"
    key    = "book-list-app-prod/terraform.tfstate"
    region = "us-east-1"
  }
}