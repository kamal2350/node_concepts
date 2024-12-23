var http = require('http');
var url = require('url');
var fs = require('fs');
const path = require('path');
http.createServer(function(req,res){
    var q = url.parse(req.url,true);
    var filename = "."+q.pathname ;
    fs.readFile(filename,function(err,data){
        if(err){
            res.writeHead(404,{'content-type':'application/json'});
            return res.end("404 Not Found");
        }
        else{
            res.writeHead(200,{'content-type':'text/html'});
            res.write(data);
            return res.end();
        }
    })
}).listen(8000);

//path

const add ="text/abc/def.txt";

console.log(path.dirname(add));
console.log(path.basename(add,path.extname(add)));
console.log(path.extname(add));
console.log(path.join(add,'?abc=23'))
console.log(path.resolve('ab','1.html'));
