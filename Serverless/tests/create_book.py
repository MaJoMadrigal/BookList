import boto3
import os
from put_book_t import handler

def get_table():
    dynamodb = boto3.resource("dynamodb", region_name='us-east-1')
    table = dynamodb.Table(os.environ["DYNAMODB_TABLE"])
    return table

# This will run in the Lambda environment and be reused across invocations
default_table = get_table()

def create_book_func(book=None, table=default_table):
    try:
        table.put_item(
            Item=book.to_item()
        )
        return book
    except Exception as e:
        print("Error creating book")
        print(e)
        error_message = "Could not create book"
        return {
            "error": error_message
        }

def test_put_book(book=None, table=default_table):
    try:
        handler(book,table)
        response_put = table.get_item(
            Key={
                'PK': '#book',
                'SK':'#Computer Networks#1650904638460'}
        )
        return response_put["Item"]
    except Exception as e:
        return False
