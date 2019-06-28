const http = require('http');

const server = http.createServer(function(req,res){
    res.end('Hola Http Server desde NodeJS');
})

server.listen(8080);
console.log('Servidor escuchando en el puerto 8080')

/*
let a = 15;
let b = 13;
let c = a + b;
console.log(c);
*/