provider "aws" {
    region = "us-east-1"
}

terraform {
  backend "s3" {
    bucket = "book-list-app.tfstate"
    key    = "book-list-app-prod/terraform.tfstate"
    region = "us-east-1"
  }
}