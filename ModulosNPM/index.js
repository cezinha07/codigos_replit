const http = require('http');

PORT = 3031

const server = 
  http.createServer(function(req, res){
    console.log(res.statusCode)
    console.log(res.statusMessage)
    res.sendDate('Hello Home Page')
  })
server.listen(PORT, function(error){
console.log("Rodando...");
});