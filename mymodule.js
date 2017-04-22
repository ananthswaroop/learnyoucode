
module.exports = function filterDir (dir,ext,callback)    {
        
        var fs = require('fs')    
        var path = require('path')
        fs.readdir(dir, function(err,list) {
        
          if(err) {
           	return callback(err);
       	  }	
        
          var returnList = [];
    
          list.forEach(function(file){
             if(path.extname(file) == '.'+ext){
                returnList.push(file);
             }
          })
        
          callback(null,returnList);
    })
}
