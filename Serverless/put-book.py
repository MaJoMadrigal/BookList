from multiprocessing import AuthenticationError
from urllib import response
from helper import (http_success, http_internal_error)
import boto3
from boto3.dynamodb.conditions import Key


def handler(event, context):

    dynamo = boto3.resource("dynamodb")
    table = dynamo.Table("book-list-app-table")

    try:
        response = book = table.put_item(
            Item = {
                'name': event['name'],
                'author': event['author'],
                'image': event['image'],
                'review':event['review']
            }
        )

        return http_success(response)

    except:
        return http_internal_error()