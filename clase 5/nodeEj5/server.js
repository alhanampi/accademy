const http = require('http');
const recursos = require('./recursos') //podría llamarse diferente la funcion

const app_port = process.env.app_port || 8080;


http.createServer((req, res) => {
    console.log(req.url);
    console.log('llego request frontend')
    if(req.url == '/') { //solamente va a entrar si la dir es localhost:8080/
        recursos.info.incContador() //cada vez que entre a la página ese contador va a crecer
        console.log(recursos.contadorVisitas)
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write(recursos.getWebPage1()) //tengo que pasar acá el contador de visitas porque perdió la referencia al pasarlo al otro archivo
        res.end();
    }
    else if(req.url == '/mipagina') { //solamente va a entrar si la dir es localhost:8080/mipagina
        recursos.info.incContador()
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write(recursos.getWebPage2()) 
        res.end();
    }    
}).listen(app_port, err => {
    if (!err) console.log('Web server running at http://' + ': ' + app_port);
});