from helper import (http_success, http_internal_error)
import boto3
from boto3.dynamodb.conditions import Key


def handler(event, context):

    dynamo = boto3.resource("dynamodb")
    table = dynamo.Table("book-list-app-table")

    try:
        result = books = table.query(
            KeyConditionExpression = Key('pk').eq("#book")
        )

        books = result["Items"]

        """ result = table.query(
            ProjectionExpression = "id,name,author,image,review",
            KeyConditionExpression = Key('pk').eq("#book")
        ) """
        
        books_response = []

        for book in books:
            obj = {
                "name": book["name"],
                "author": book["author"],
                "image": book["image"],
                "review": book["review"]
            }
            books_response.append(obj)

        response = {
            "books": books_response
        }

        return http_success(response)

    except:
        return http_internal_error()