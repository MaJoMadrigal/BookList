import boto3
import os


def get_table():
    dynamodb = boto3.resource("dynamodb", region_name='us-east-1')
    table = dynamodb.Table(os.environ["DYNAMODB_TABLE"])
    return table

# This will run in the Lambda environment and be reused across invocations
default_table = get_table()

def create_book(book=None, table=default_table):
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