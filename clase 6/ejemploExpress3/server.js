const express = require('express');
const bodyParser = require('body-parser')
const app = express();

const PORT = 8080;


app.use(bodyParser.urlencoded({ extended: true }))

app.use((req, res, next) => {
    console.log('get', req.query);
    console.log('post', req.body)

    next();
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.get('/datos/:nombre?/:apellido?/:edad?', (req, res) => { //: significa que está esperando un nombre, es un dato genérico. El ? es para que sea opcional
    let datos = req.params; //params es un objeto que tiene todos los objetos que pase por la ruta
    console.log(datos)

    let nombre = req.params.nombre;
    let apellido = req.params.apellido;
    let edad = req.params.edad;
    res.sendFile(__dirname + '/index.html');
    console.log(nombre, apellido, edad)
})

app.put('/', (req, res) => {
    res.send('requerimiento put');
})

app.delete('/', (req, res) => {
    res.send('requerimiento delete');
})

app.get('/datos', (req, res) => {
    res.redirect('/');
})

app.post('/datos', (req, res) => {
    res.redirect('/');
})

//para atrapar rutas no validas
app.get('*', (req, res) => {
    res.send('ruta no encontrada')
})

app.listen(PORT, err => {
    if (err) return console.log(`Error en express ${err}`)
    console.log(`Servidor express listen in ${PORT}`);
})