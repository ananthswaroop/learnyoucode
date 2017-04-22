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

var fs = require('fs')

var filterDir = require('./mymodule.js')


filterDir (process.argv[2],process.argv[3],function(err,list){
    if(err) {
        return console.log(err);
    } else {
        list.forEach(function(file){
           console.log(file); 
        })
    }
    
    
})


