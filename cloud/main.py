def process_text(request):
    """Responds to any HTTP request.
    Args:
        request (flask.Request): HTTP request object.
    Returns:
        The response text or any set of values that can be turned into a
        Response object using
        `make_response <http://flask.pocoo.org/docs/1.0/api/#flask.Flask.make_response>`.
    """
    request_json = request.get_json()
    # print(request_json)
    # text = request_json.text
    # print("process the text...")
    # return request_json.url
    if request.args and 'text' in request.args:
        return request.args.get('text')
    elif request_json and 'text' in request_json:
        return request_json['text']
    else:
        return f'Hello World!'
