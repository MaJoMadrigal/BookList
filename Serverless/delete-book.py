from helper import (http_success, http_internal_error)
import boto3
from boto3.dynamodb.conditions import Key
import json


def handler(event, context):

    dynamo = boto3.resource("dynamodb")
    table = dynamo.Table("book-list-app-table")
    id = event['queryStringParameters']['id']
    name = event['queryStringParameters']['name']

    try:
        response = table.query(
            ExpressionAttributeValues = {
                ':book': '#book',
                ':sk': f'#{name}#{id}'
            },
            KeyConditionExpression = 'pk=:book and begins_with(sk, :sk)'
        )
        
        for bookItem in response['Items']:
            table.delete_item(
                Key = {
                    'pk': bookItem['pk'],
                    'sk': bookItem['sk']
                }
            )

        book = {
            'id': id
        }

        return http_success({'body':'Successfully deleted', 'origin':book})

    except:
        return http_internal_error()