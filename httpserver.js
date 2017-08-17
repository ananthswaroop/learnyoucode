 var http = require('http')  
 var fs = require('fs')
 var fileReadStream = fs.createReadStream(process.argv[3]) 
 var server = http.createServer(function (req, res) {  
         fileReadStream.pipe(res)
 })  
     server.listen(process.argv[2])  