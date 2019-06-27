//importa libreria http:
const http = require('http');

//create server es un metodo que pertenece al objeto http. Se le pone un callback: un parametro que es una funcion:
//require (lo que el navegador está pidiendo), response (lo que devuelve el server al navegador)
const server = http.createServer(function(req, res){
    res.end('Hola Http server desde nodeJS') //end responde algo y cierra la conexion
})

//se le pide al server que escuche desde ese puerto:
server.listen(8080);
console.log('servidor escuchando en puerto 8080') //si escribo en el navegador localhost:8080 va a mostrarlo

/*

let a = 11;
let b = 7;
let c = a ** b;
console.log(c);

*/

