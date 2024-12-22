var http = require("http");
var url = require('url')
http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/html'});
    var q = url.parse(req.url,true);  
    console.log(q.path) ;                                                                         
    res.end();
}).listen(8000);