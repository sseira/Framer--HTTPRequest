
# HTTPRequest wrapper class
# accepts url, type, callback, content_type, response_type, body, & access_token 
# based on type, sends a GET or POST request
#

class HTTPRequest 
	constructor: (@options={}) -> 
		default_callback = (data) -> console.log data
		@url = if @options.url then @options.url else 'https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo'
		@type = if @options.type then @options.type else 'GET'
		@callback = if @options.callback then @options.callback else default_callback #((data) -> print data)		
		@content_type = if @options.content_type then @options.content_type else 'application/json'
		@response_type = if @options.response_type then @options.response_type else 'json'
		@parent_layer = @options.parent_layer

		@body = if @options.body then JSON.stringify(@options.body) else null
		
		@access_token = if @options.access_token then @options.access_token else 'SUPER_SECRET_TOKEN'		
		
		r = new XMLHttpRequest
		r.open @type, @url, true
		r.responseType = @response_type
		if @access_token
			r.setRequestHeader('Authorization', 'Bearer ' + @access_token);
		r.setRequestHeader("Content-type", @content_type)
		callback = @callback
		r.onreadystatechange = ->
			if (r.readyState == XMLHttpRequest.DONE)
				if (r.status == 200)
					data = r.response
					callback(data)
				else
					console.log "Error #{r.status}"
					callback({error: r})
		
		r.send(@body)

module.exports = HTTPRequest