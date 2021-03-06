from enum import auto
from helper import (http_success, http_internal_error)
import boto3
from boto3.dynamodb.conditions import Key
import json


def handler(event, context):

    dynamo = boto3.resource("dynamodb")
    table = dynamo.Table("book-list-app-table")

    try:
        json_event = json.loads(event['body'])
        id, name, author, image, review = json_event.values();

        response = table.put_item(
            Item = {
                'pk': '#book',
                'sk': f'#{name}#{id}',
                'id': id,
                'name': name,
                'author': author,
                'image': image,
                'review':review
            }
        )

        book = {
            'id': id,
            'name': name,
            'author': author,
            'image': image,
            'review':review
        }

        return http_success({'body':'Successfully created', 'origin':book})

    except:
        return http_internal_error()