# Framer HTTP Request Module

A [Framer](http://framerjs.com) module that makes it simple to call external APIs using XMLHttpRequest


## Installation

1. Grab `HTTPRequest.coffee` from this repo's `/modules` directory
2. Put it into your Framer Studio project's  `/modules` directory. 
3. Then, in your Framer prototype, require the module with this line:

```coffeescript
HTTPRequest = require "HTTPRequest"
```
---

## Examples

#### [Basic GET and POST Requests](https://framer.cloud/rGpzM)

Demonstrates asynchronous GET and POST requests.

---

## Usage

### Creating an HTTPRequest 

Simply put, the HTTPRequest module is a wrapper for an  [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) and takes care of the configuration/error handling for you

To create an HTTPRequest simply add:

```coffeescript
myHTTPRequest = new HTTPRequest
  url: 'http://www.APIendpoint.com'					** default: NASA API 
  type: 'GET', 'POST', 'PUT', 'PATCH', or 'DELETE'	** default: 'GET'
  callback: yourCallbackFunction  					** default: print result

  # other optional parameters		
  content_type  		** default:'application/json'
  response_type 		** default: 'json'
  body 				 	** default: null	
  access_token			** default: 'SUPER_SECRET_TOKEN'	
```

** Careful with Framer reloading on every key stroke, this could cause you to call an API more than allowed and get you kicked off. 
** I recommend disabling auto refresh by going to View -> Auto Refresh -> Off
