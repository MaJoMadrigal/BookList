from enum import auto
import boto3
from boto3.dynamodb.conditions import Key
import json


def handler(event, context):

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

        return book

    except:
        return False