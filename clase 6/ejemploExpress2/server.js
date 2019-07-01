const express = require('express');
const bodyParser = require('body-parser') //para poder hacer pedidos con post
const app = express();

const PORT = 8080;

//el objeto extended habilita a que lleguen más cosas por post. Habilita a que más campos type puedan ser parseados. 
app.use(bodyParser.urlencoded({extended: true}))

app.use((req, res, next) => {
    //console.log(req.url);
    //puedo poner en el use los req de get y post:
    console.log('get', req.query);
    console.log('post', req.body)

    next(); 
})

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html');
})

//para ver put y delete se usa postman:
app.put('/', (req, res) => {
    res.send('requerimiento put'); 
})

app.delete('/', (req, res) => {
    res.send('requerimiento delete');
})

app.get('/datos', (req,res) => {
    //estas dos líneas las puedo llevar al use:
    //let datos = req.query;
    //console.log('get', datos);
    
    //res.send(datos);

    //para que vuelva a la página de origen:
    //res.sendFile(__dirname + '/index.html') //opcion1. Con este entra una sola vez porque se responde de forma directa, no hay re-ruteo.
    res.redirect('/'); //opcion2. Problema que tiene es que redirige así que entra 2 veces
})

app.post('/datos',(req, res) => {
    //estas dos líneas las puedo llevar al use:
    //let datos = req.body; 
    //console.log('post', datos)

    //res.send(datos) //devuelve como objeto

    //para que vuelva a la página de origen:
    //res.sendFile(__dirname + '/index.html')
    res.redirect('/');
    
})

//para atrapar rutas no validas
app.get('*', (req, res) => {
    res.send('ruta no encontrada')
})

app.listen(PORT, err => {
    if(err) return console.log(`Error en express ${err}`)
    console.log(`Servidor express listen in ${PORT}`);
})