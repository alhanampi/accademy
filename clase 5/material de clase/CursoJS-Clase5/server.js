/*
require('http').createServer((req,res) => res.end('Server 1')).listen(8080);
require('http').createServer((req,res) => res.end('Server 2')).listen(8081);
require('http').createServer((req,res) => res.end('Server 3')).listen(8082);
require('http').createServer((req,res) => res.end('Server 4')).listen(8083);
require('http').createServer((req,res) => res.end('Server 5')).listen(8084);
*/

const http = require('http');
const recursos = require('./recursos');

const app_port = process.env.app_port || 8080;

//const getWebPage = () => '<h1 style="color:red;">La fecha es <span style="color:blue;">' + new Date().toLocaleString() + '</span></h1>';


http.createServer((req, res) => {
    //console.log(req.url);

    if(req.url == '/') {
        recursos.info.incContador();
        console.log('llego request front-end / cliente / navegador');
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(recursos.getWebPage1());
        res.end();
    }
    else if(req.url == '/mipagina') {
        recursos.info.incContador();
        console.log('llego request front-end / cliente / navegador');
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(recursos.getWebPage2());
        res.end();
    }
    else res.end();
}).listen(app_port, err => {
    if(!err) console.log('Web server running at http://' + ':' + app_port);
});

