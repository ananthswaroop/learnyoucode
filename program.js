//var  j = 0;
//for (var  i = 2; i < process.argv.length;i++) {
//	j = j + Number(process.argv[i]);
//}
//console.log(j);

/*var fs = require('fs')
var buffer = fs.readFileSync(process.argv[2]);
var stt = buffer.toString().split('\n');
console.log(stt.length-1);*/

/*var fs = require('fs')
var file = process.argv[2]
var buffer = fs.readFile(file,'utf-8', function(err,contents) {
          var stt = contents.toString().split('\n');
          console.log(stt.length-1);             
});*/

/*var fs = require('fs')
var path = require('path')
var directory = process.argv[2];

fs.readdir(directory, function(err, items) {
      items.forEach(function(file) {
	    if(path.extname(file)  == '.'+process.argv[3])
		console.log(file);
     });
})*/

//var fs = require('fs')

//var filterDir = require('./mymodule.js')


//filterDir (process.argv[2],process.argv[3],function(err,list){
  //  if(err) {
      //  return console.log(err);
    //} else {
        //list.forEach(function(file){
          // console.log(file); 
        //})
    //}
    
    
//})

//var http = require('http')

//http.get(process.argv[2], function(response) {
  //  response.setEncoding('utf-8');
  //  response.on("data",console.log);
  //  response.on("error",console.error);
//})

/*   var http = require("http")
     var bl = require("bl")

     http.get(process.argv[2],function(response) {
        response.setEncoding('utf-8');
        response.pipe(bl(function (err, data) { 
        if(err) {
            return console.error(err)
        }
        var length = data.toString().length;
        console.log(length);
        console.log(data.toString());
     }));     
})  */

/*var http = require("http")
  var bl = require("bl")

    http.get(process.argv[2] , function(response) {
        response.setEncoding('utf-8');
        response.pipe(bl(function (err, data) { 
            if(err) {
                return console.error(err)
            }
            console.log(data.toString());
            http.get(process.argv[3],function(response){
                response.setEncoding('utf-8');
                response.pipe(bl(function (err, data) { 
                if(err) {
                    return console.error(err)
                }
                console.log(data.toString());
                
                        http.get(process.argv[4],function(response){
                            response.setEncoding('utf-8');
                            response.pipe(bl(function (err, data) { 
                                if(err) {
                                    return console.error(err)
                                }
                                console.log(data.toString());
                            }))
                        })
                
                }))
            })
        }))
    }); */



/*var net = require('net') 
        
    function pad(n) { 
            return n < 10 ? '0' + n : n 
    }
        
    var server = net.createServer(function (socket) {  
    var date = new Date();
                 
    var data = pad(date.getFullYear()) + "-" + 
               pad(date.getMonth() + 1) + "-" + 
               pad(date.getDate()) + " " +
               pad(date.getHours()) + ":" +
               pad(date.getMinutes()) + "\n";
    socket.write(data);
    socket.end();
                    
    })  
    server.listen(process.argv[2]) */

 var http = require('http')  
 var fs = require('fs')
 var fileReadStream = fs.createReadStream(process.argv[3]) 
 var server = http.createServer(function (req, res) {  
         fileReadStream.pipe(res)
 })  

server.listen(process.argv[2])  
   




