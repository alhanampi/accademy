//modulos instalados:
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

//archivos creados:
const routes = require('./routes'); //devolver objeto almacenado en routes
const db = require('./db');

//puerto node:
const PORT = 8080;

//express:
const app = express();

//use:
//app.use(express.static(__dirname + '/views')) //probablemente no necesite esto
app.use(cors());
app.use(bodyParser.json());

app.get('/', function(req, res){}) //si entra a static no entra a esta

//rutas de la app:
app.get('/productos', routes.getProd);
app.post('/productos', routes.postProd); //están en routes
app.delete('/productos/:id', routes.deleteProd);
app.put('/productos/:id', routes.putProd);
//fallback:
app.get('*', routes.notFound);

//conexion db. El callback cb viene por db.js:
db.conectDB(() => {
    app.listen(PORT, err => {
        if (err) return console.log(`Error express: ${err}`);
        console.log(`Server express OK en ${PORT}`);
    })
})
