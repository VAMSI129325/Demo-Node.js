var http = require('http')
var a = 10
var b = 20
var c = a + b
http.createServer(function(req,res){
    res.write("<b>A value is </b>"+a)
    res.write("</br>B value is "+b)
    res.write("</br>sum is "+c)
    res.end("</br>Hello Node JS")
}).listen(3000)
console.log("Server Started on http://127.0.0.1:3000")
