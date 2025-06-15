var fs = require('fs')
var http = require('http')

http.createServer(function(req,res){
    fs.readFile('index.html','utf-8',function(err,data){
        res.end(data)
    })
}).listen(3001)
console.log("server started on http://127.0.0.1:3001")