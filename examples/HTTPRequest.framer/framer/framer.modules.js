require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"HTTPRequest":[function(require,module,exports){
var HTTPRequest;

HTTPRequest = (function() {
  function HTTPRequest(options) {
    var callback, default_callback, r;
    this.options = options != null ? options : {};
    default_callback = function(data) {
      print(data);
      return console.log(data);
    };
    this.url = this.options.url ? this.options.url : 'https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo';
    this.type = this.options.type ? this.options.type : 'GET';
    this.callback = this.options.callback ? this.options.callback : default_callback;
    this.content_type = this.options.content_type ? this.options.content_type : 'application/json';
    this.response_type = this.options.response_type ? this.options.response_type : 'json';
    this.parent_layer = this.options.parent_layer;
    this.body = this.options.body ? JSON.stringify(this.options.body) : null;
    this.access_token = this.options.access_token ? this.options.access_token : 'SUPER_SECRET_TOKEN';
    console.log(this.content_type);
    r = new XMLHttpRequest;
    r.open(this.type, this.url, true);
    r.responseType = this.response_type;
    if (this.access_token) {
      r.setRequestHeader('Authorization', 'Bearer ' + this.access_token);
    }
    r.setRequestHeader("Content-type", this.content_type);
    callback = this.callback;
    r.onreadystatechange = function() {
      var data;
      if (r.readyState === XMLHttpRequest.DONE) {
        if (r.status >= 200 && r.status <= 206) {
          data = r.response;
          return callback(data);
        } else {
          console.log("Error " + r.status);
          return callback({
            error: r,
            data: r.response
          });
        }
      }
    };
    r.send(this.body);
  }

  return HTTPRequest;

})();

module.exports = HTTPRequest;


},{}],"myModule":[function(require,module,exports){
exports.myVar = "myVariable";

exports.myFunction = function() {
  return print("myFunction is running");
};

exports.myArray = [1, 2, 3];


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWVyLm1vZHVsZXMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL1VzZXJzL3NzZWlyYS9Ecm9wYm94IChJREVPKS9Tb2Z0d2FyZSBQbGF5Z3JvdW5kL0ZyYW1lci9IVFRQUmVxdWVzdC9leGFtcGxlcy9IVFRQUmVxdWVzdC5mcmFtZXIvbW9kdWxlcy9teU1vZHVsZS5jb2ZmZWUiLCIuLi8uLi8uLi8uLi8uLi9Vc2Vycy9zc2VpcmEvRHJvcGJveCAoSURFTykvU29mdHdhcmUgUGxheWdyb3VuZC9GcmFtZXIvSFRUUFJlcXVlc3QvZXhhbXBsZXMvSFRUUFJlcXVlc3QuZnJhbWVyL21vZHVsZXMvSFRUUFJlcXVlc3QuY29mZmVlIiwibm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIjIEFkZCB0aGUgZm9sbG93aW5nIGxpbmUgdG8geW91ciBwcm9qZWN0IGluIEZyYW1lciBTdHVkaW8uIFxuIyBteU1vZHVsZSA9IHJlcXVpcmUgXCJteU1vZHVsZVwiXG4jIFJlZmVyZW5jZSB0aGUgY29udGVudHMgYnkgbmFtZSwgbGlrZSBteU1vZHVsZS5teUZ1bmN0aW9uKCkgb3IgbXlNb2R1bGUubXlWYXJcblxuZXhwb3J0cy5teVZhciA9IFwibXlWYXJpYWJsZVwiXG5cbmV4cG9ydHMubXlGdW5jdGlvbiA9IC0+XG5cdHByaW50IFwibXlGdW5jdGlvbiBpcyBydW5uaW5nXCJcblxuZXhwb3J0cy5teUFycmF5ID0gWzEsIDIsIDNdIiwiXG4jIEhUVFBSZXF1ZXN0IHdyYXBwZXIgY2xhc3NcbiMgYWNjZXB0cyB1cmwsIHR5cGUsIGNhbGxiYWNrLCBjb250ZW50X3R5cGUsIHJlc3BvbnNlX3R5cGUsIGJvZHksICYgYWNjZXNzX3Rva2VuIFxuIyBiYXNlZCBvbiB0eXBlLCBzZW5kcyBhIEdFVCBvciBQT1NUIHJlcXVlc3RcbiNcblxuY2xhc3MgSFRUUFJlcXVlc3QgXG5cdGNvbnN0cnVjdG9yOiAoQG9wdGlvbnM9e30pIC0+IFxuXHRcdGRlZmF1bHRfY2FsbGJhY2sgPSAoZGF0YSkgLT4gXG5cdFx0XHRwcmludCBkYXRhIFxuXHRcdFx0Y29uc29sZS5sb2cgZGF0YVxuXG5cdFx0QHVybCA9IGlmIEBvcHRpb25zLnVybCB0aGVuIEBvcHRpb25zLnVybCBlbHNlICdodHRwczovL2FwaS5uYXNhLmdvdi9wbGFuZXRhcnkvYXBvZD9hcGlfa2V5PU5OS09qa291bDhuMUNIMThUV0E5Z3duZ1cxczFTbWpFU1BqTm9VRm8nXG5cdFx0QHR5cGUgPSBpZiBAb3B0aW9ucy50eXBlIHRoZW4gQG9wdGlvbnMudHlwZSBlbHNlICdHRVQnXG5cdFx0QGNhbGxiYWNrID0gaWYgQG9wdGlvbnMuY2FsbGJhY2sgdGhlbiBAb3B0aW9ucy5jYWxsYmFjayBlbHNlIGRlZmF1bHRfY2FsbGJhY2sgXHRcdFxuXHRcdEBjb250ZW50X3R5cGUgPSBpZiBAb3B0aW9ucy5jb250ZW50X3R5cGUgdGhlbiBAb3B0aW9ucy5jb250ZW50X3R5cGUgZWxzZSAnYXBwbGljYXRpb24vanNvbidcblx0XHRAcmVzcG9uc2VfdHlwZSA9IGlmIEBvcHRpb25zLnJlc3BvbnNlX3R5cGUgdGhlbiBAb3B0aW9ucy5yZXNwb25zZV90eXBlIGVsc2UgJ2pzb24nXG5cdFx0QHBhcmVudF9sYXllciA9IEBvcHRpb25zLnBhcmVudF9sYXllclxuXG5cdFx0QGJvZHkgPSBpZiBAb3B0aW9ucy5ib2R5IHRoZW4gSlNPTi5zdHJpbmdpZnkoQG9wdGlvbnMuYm9keSkgZWxzZSBudWxsXG5cdFx0XG5cdFx0QGFjY2Vzc190b2tlbiA9IGlmIEBvcHRpb25zLmFjY2Vzc190b2tlbiB0aGVuIEBvcHRpb25zLmFjY2Vzc190b2tlbiBlbHNlICdTVVBFUl9TRUNSRVRfVE9LRU4nXHRcdFxuXHRcdFxuXHRcdGNvbnNvbGUubG9nKEBjb250ZW50X3R5cGUpXG5cdFx0ciA9IG5ldyBYTUxIdHRwUmVxdWVzdFxuXHRcdHIub3BlbiBAdHlwZSwgQHVybCwgdHJ1ZVxuXHRcdHIucmVzcG9uc2VUeXBlID0gQHJlc3BvbnNlX3R5cGVcblx0XHRpZiBAYWNjZXNzX3Rva2VuXG5cdFx0XHRyLnNldFJlcXVlc3RIZWFkZXIoJ0F1dGhvcml6YXRpb24nLCAnQmVhcmVyICcgKyBAYWNjZXNzX3Rva2VuKTtcblx0XHRyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LXR5cGVcIiwgQGNvbnRlbnRfdHlwZSlcblx0XHRjYWxsYmFjayA9IEBjYWxsYmFja1xuXHRcdHIub25yZWFkeXN0YXRlY2hhbmdlID0gLT5cblx0XHRcdGlmIChyLnJlYWR5U3RhdGUgPT0gWE1MSHR0cFJlcXVlc3QuRE9ORSlcblx0XHRcdFx0aWYgKHIuc3RhdHVzID49IDIwMCAmJiByLnN0YXR1cyA8PSAyMDYpIFxuXHRcdFx0XHRcdCMgUmVmZXJlbmNlIGZvciBzdGF0dXMgY29kZXMgLT4gICBodHRwczovL3d3dy53M3NjaG9vbHMuY29tL3RhZ3MvcmVmX2h0dHBtZXNzYWdlcy5hc3Bcblx0XHRcdFx0XHRkYXRhID0gci5yZXNwb25zZVxuXHRcdFx0XHRcdGNhbGxiYWNrKGRhdGEpXG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRjb25zb2xlLmxvZyBcIkVycm9yICN7ci5zdGF0dXN9XCJcblx0XHRcdFx0XHRjYWxsYmFjayh7ZXJyb3I6IHIsIGRhdGE6IHIucmVzcG9uc2V9KVxuXHRcdFxuXHRcdHIuc2VuZChAYm9keSlcblxubW9kdWxlLmV4cG9ydHMgPSBIVFRQUmVxdWVzdCIsIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBRUFBO0FETUEsSUFBQTs7QUFBTTtFQUNRLHFCQUFDLE9BQUQ7QUFDWixRQUFBO0lBRGEsSUFBQyxDQUFBLDRCQUFELFVBQVM7SUFDdEIsZ0JBQUEsR0FBbUIsU0FBQyxJQUFEO01BQ2xCLEtBQUEsQ0FBTSxJQUFOO2FBQ0EsT0FBTyxDQUFDLEdBQVIsQ0FBWSxJQUFaO0lBRmtCO0lBSW5CLElBQUMsQ0FBQSxHQUFELEdBQVUsSUFBQyxDQUFBLE9BQU8sQ0FBQyxHQUFaLEdBQXFCLElBQUMsQ0FBQSxPQUFPLENBQUMsR0FBOUIsR0FBdUM7SUFDOUMsSUFBQyxDQUFBLElBQUQsR0FBVyxJQUFDLENBQUEsT0FBTyxDQUFDLElBQVosR0FBc0IsSUFBQyxDQUFBLE9BQU8sQ0FBQyxJQUEvQixHQUF5QztJQUNqRCxJQUFDLENBQUEsUUFBRCxHQUFlLElBQUMsQ0FBQSxPQUFPLENBQUMsUUFBWixHQUEwQixJQUFDLENBQUEsT0FBTyxDQUFDLFFBQW5DLEdBQWlEO0lBQzdELElBQUMsQ0FBQSxZQUFELEdBQW1CLElBQUMsQ0FBQSxPQUFPLENBQUMsWUFBWixHQUE4QixJQUFDLENBQUEsT0FBTyxDQUFDLFlBQXZDLEdBQXlEO0lBQ3pFLElBQUMsQ0FBQSxhQUFELEdBQW9CLElBQUMsQ0FBQSxPQUFPLENBQUMsYUFBWixHQUErQixJQUFDLENBQUEsT0FBTyxDQUFDLGFBQXhDLEdBQTJEO0lBQzVFLElBQUMsQ0FBQSxZQUFELEdBQWdCLElBQUMsQ0FBQSxPQUFPLENBQUM7SUFFekIsSUFBQyxDQUFBLElBQUQsR0FBVyxJQUFDLENBQUEsT0FBTyxDQUFDLElBQVosR0FBc0IsSUFBSSxDQUFDLFNBQUwsQ0FBZSxJQUFDLENBQUEsT0FBTyxDQUFDLElBQXhCLENBQXRCLEdBQXlEO0lBRWpFLElBQUMsQ0FBQSxZQUFELEdBQW1CLElBQUMsQ0FBQSxPQUFPLENBQUMsWUFBWixHQUE4QixJQUFDLENBQUEsT0FBTyxDQUFDLFlBQXZDLEdBQXlEO0lBRXpFLE9BQU8sQ0FBQyxHQUFSLENBQVksSUFBQyxDQUFBLFlBQWI7SUFDQSxDQUFBLEdBQUksSUFBSTtJQUNSLENBQUMsQ0FBQyxJQUFGLENBQU8sSUFBQyxDQUFBLElBQVIsRUFBYyxJQUFDLENBQUEsR0FBZixFQUFvQixJQUFwQjtJQUNBLENBQUMsQ0FBQyxZQUFGLEdBQWlCLElBQUMsQ0FBQTtJQUNsQixJQUFHLElBQUMsQ0FBQSxZQUFKO01BQ0MsQ0FBQyxDQUFDLGdCQUFGLENBQW1CLGVBQW5CLEVBQW9DLFNBQUEsR0FBWSxJQUFDLENBQUEsWUFBakQsRUFERDs7SUFFQSxDQUFDLENBQUMsZ0JBQUYsQ0FBbUIsY0FBbkIsRUFBbUMsSUFBQyxDQUFBLFlBQXBDO0lBQ0EsUUFBQSxHQUFXLElBQUMsQ0FBQTtJQUNaLENBQUMsQ0FBQyxrQkFBRixHQUF1QixTQUFBO0FBQ3RCLFVBQUE7TUFBQSxJQUFJLENBQUMsQ0FBQyxVQUFGLEtBQWdCLGNBQWMsQ0FBQyxJQUFuQztRQUNDLElBQUksQ0FBQyxDQUFDLE1BQUYsSUFBWSxHQUFaLElBQW1CLENBQUMsQ0FBQyxNQUFGLElBQVksR0FBbkM7VUFFQyxJQUFBLEdBQU8sQ0FBQyxDQUFDO2lCQUNULFFBQUEsQ0FBUyxJQUFULEVBSEQ7U0FBQSxNQUFBO1VBS0MsT0FBTyxDQUFDLEdBQVIsQ0FBWSxRQUFBLEdBQVMsQ0FBQyxDQUFDLE1BQXZCO2lCQUNBLFFBQUEsQ0FBUztZQUFDLEtBQUEsRUFBTyxDQUFSO1lBQVcsSUFBQSxFQUFNLENBQUMsQ0FBQyxRQUFuQjtXQUFULEVBTkQ7U0FERDs7SUFEc0I7SUFVdkIsQ0FBQyxDQUFDLElBQUYsQ0FBTyxJQUFDLENBQUEsSUFBUjtFQWxDWTs7Ozs7O0FBb0NkLE1BQU0sQ0FBQyxPQUFQLEdBQWlCOzs7O0FEdkNqQixPQUFPLENBQUMsS0FBUixHQUFnQjs7QUFFaEIsT0FBTyxDQUFDLFVBQVIsR0FBcUIsU0FBQTtTQUNwQixLQUFBLENBQU0sdUJBQU47QUFEb0I7O0FBR3JCLE9BQU8sQ0FBQyxPQUFSLEdBQWtCLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQIn0=
