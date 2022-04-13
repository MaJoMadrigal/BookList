from helper import (http_success, http_internal_error)
import boto3
from boto3.dynamodb.conditions import Key
import json


def handler(event, context):

    dynamo = boto3.resource("dynamodb")
    table = dynamo.Table("book-list-app-table")
    id = event['queryStringParameters']['id']
    try:
        response = table.query(
            ExpressionAttributeValues = {
                ':book': '#book',
                ':id': f'#{id}'
            },
            KeyConditionExpression = 'pk=:book and begins_with(sk, :id)'
        )
        
        for bookItem in response['Items']:
            table.delete_item(
                Key = {
                    'pk': bookItem['pk'],
                    'sk': bookItem['sk']
                }
            )

        return http_success({'body':'Successfully deleted'})

    except:
        return http_internal_error()