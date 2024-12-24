var http = require('http')

var a = 100;
var b = 20;
var c = a + b;
var msg="";

if(c === 30){
    msg = "Success";
}
else(msg = "Failed");

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write("A value is" +a);

    res.write("<br>B value is" +b);
    res.write(`<br>Sum is ${c}`)
    res.end("<br>"+msg+"<br>"+"done")
}).listen(4000)

console.log("Server is Started http://127.0.0.1:4000");


