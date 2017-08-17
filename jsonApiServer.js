 var http = require('http')  
 var fs = require('fs')
 var url = require('url')
 
 var parsetime = function(time) {
      return {
          hour   : time.getHours(),
          minute : time.getMinutes(),
          second : time.getSeconds()
      }
 }
 
 var unixtime = function(time) {
     return {unixtime : time.getTime() }
 }
 var server = http.createServer(function (req, res) {  
   var result 
   var parsedUrl = url.parse(req.url,true)
   var time = new Date(parsedUrl.query.iso)
   
    if(req.method != 'GET') {
       return 'send me a GET\n'
    }
    if (/^\/api\/parsetime/.test(req.url)) {
        result = parsetime(time)
    } else if (/^\/api\/unixtime/.test(req.url)) {
        result = unixtime(time)
    } 
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(result))
 })
 
 server.listen(process.argv[2])