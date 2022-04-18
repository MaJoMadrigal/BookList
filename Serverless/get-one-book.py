from helper import (http_success, http_internal_error)
import boto3
from boto3.dynamodb.conditions import Key


def handler(event, context):

    dynamo = boto3.resource("dynamodb")
    table = dynamo.Table("book-list-app-table")
    name = event['queryStringParameters']['name']

    try:
        result = books = table.query(
            KeyConditionExpression = Key('pk').eq('#book')&Key('sk').begins_with(f'#{name}')
        )

        books = result["Items"]

        books_response = []

        for book in books:
            obj = {
                "id": book["id"],
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