const http = require('http');
const paginas = require('./paginas');

const PORT = 8080;


http.createServer((req, res) => {
    console.log(req.url)
    if(req.url == '/') {
        paginas.contador.cont()
        console.log(paginas.contador.contadorVisitas)
        res.writeHead(200, {'Content-Type':'text/html'})
        res.write(paginas.webpage1());
        res.end()
    }
    else if(req.url == '/pagina2') {
        paginas.contador.cont()
        res.writeHead(200, {'Content-Type':'text/html'})
        res.write(paginas.webpage2());
        res.end()
    }
}).listen(PORT, err => {
    if(err) return console.log(`El error es ${err}`)
    console.log(`Escuchando puerto ${PORT}`)
})