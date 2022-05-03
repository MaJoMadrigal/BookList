import boto3
import os
from create_book import create_book

class StubBook:

    def __init__(self):
        pass
    
    def to_item(self):
        return {
            "PK": "#book",
            "SK": "#Computer Networks#1650904638460",
            "author": "Andrew Tanenbaum, David Wetherall",
            "id": "1650904638460",
            "image": "https://images-na.ssl-images-amazon.com/images/I/51wKDy1RWIL.jpg",
            "name": "Computer Networks",
            "review": "Tanenbaum takes a structured approach to explaining how networks work from the inside out. He starts with an explanation of the physical layer of networking, computer hardware and transmission systems; then works his way up to network applications. Tanenbaum's in-depth application coverage includes email; the domain name system; the World Wide Web (both client- and server-side); and multimedia (including voice over IP, Internet radio video on demand, video conferencing, and streaming media."
        }

def mocked_table():
    dynamodb = boto3.resource("dynamodb", region_name='us-east-1')
    table = dynamodb.Table(os.environ["DYNAMODB_TABLE"])
    return table

def test_create_book(dynamodb_table):
    book_instance = StubBook()
    table = mocked_table()
    assert dynamodb_table == True
    assert create_book(book=book_instance, table=table) == book_instance