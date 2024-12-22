var http = require("http");
var url = require('url');
var fs = require('fs');
http.createServer(function(req,res){
    fs.readFile('app.html',function (err,data) {
        res.writeHead(200,{'content-type':'text/html'});
        res.write(data);
        return res.end();
      });                                                                        
    
}).listen(8000);

//append file if (not exist ) create new else append 

fs.readFile('app.html',function(err,data){
  if (err) throw err;
  fs.appendFile('app1.html',data,function (err) {
   
    console.log('saved!');
  });

});  

// open for writing
fs.open('app.html', 'w', function (err, file) {
    if (err) throw err;
    console.log('Saved!');
  });

// delete file fs.unlink
fs.unlink('delete.txt',function(err){
    console.log('deleted file');
});

//fs.rename
 fs.rename('app1.html','test1.html',function(err){
    if (err) throw err;
    console.log('File Renamed!')
 });