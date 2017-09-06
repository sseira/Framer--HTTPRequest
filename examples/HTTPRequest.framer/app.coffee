HTTPRequest = require 'HTTPRequest'

url = 'https://reqres.in/api/users'

body = {name: 'new user', movies: ['blah']}

callback = (data) ->
	print '-----------------------'
	console.log data
	print data
	print '-----------------------'
	
	
myHTTPRequest_GET = new HTTPRequest
	url: url
	type: 'GET'
	callback: callback

myHTTPRequest_POST = new HTTPRequest
	url: url
	type: 'POST'
	body: body
	callback: callback