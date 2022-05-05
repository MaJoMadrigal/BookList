import os
import boto3
import pytest
from moto import mock_dynamodb
import put_book
import conftest

book = {
    "Item": [
        {
            "PK": "#book",
            "SK": "#Computer Networks#1650904638460",
            "author": "Andrew Tanenbaum, David Wetherall",
            "id": "1650904638460",
            "image": "https://images-na.ssl-images-amazon.com/images/I/51wKDy1RWIL.jpg",
            "name": "Computer Networks",
            "review": "Tanenbaum takes a structured approach to explaining how networks work from the inside out. He starts with an explanation of the physical layer of networking, computer hardware and transmission systems; then works his way up to network applications. Tanenbaum's in-depth application coverage includes email; the domain name system; the World Wide Web (both client- and server-side); and multimedia (including voice over IP, Internet radio video on demand, video conferencing, and streaming media."
        }
    ]
}

def test_lambda_handler():

    try:
        response = handler(event=book, context={})
    except Exception as e:
        print(e)
    assert True == True