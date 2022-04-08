import json
import sample_data


def test(event, context):
    body = {
        "books": sample_data.BOOKS
    }

    response = {
        "statusCode": 200,
        "body": json.dumps(body),
        "headers": {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': True,
        }
    }

    return response