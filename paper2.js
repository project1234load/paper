var http=require('http');  

var product ={
    title:"pen",
   unitprice:25,
    likes:500,
    quantity:5000
};


var controller=function(request,response)
{
	response.writeHead(200,
	                {"Content-Type" : "text/plain"});
	                response.end( JSON.stringify(product));
};
var server=http.createServer(controller);
server.listen(7000);
console.log("listening on port 7000");