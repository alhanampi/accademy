const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors'); //proteccion que viaja por encabezados. Después se hace un app.use(). De debe instalar con un npm 

//estos dos son módulos externos:
const routes = require('./routes'); //este file devuelve un objeto que se almacena en routes.
const db = require('./db');

const PORT = 8080;

const app = express()

app.use(express.static(__dirname + '/views')); //la carpeta view se usa en produccion, el contenido del dist se copia en views
app.use(cors());
app.use(bodyParser.json()); //post transmite en json, así que con esto los interpreta



app.get('/', function (req, res) { //a esta no entra nunca porque entra primero a la static

})
//así es como va a entrar a cada una de las rutas:
app.get('/prod', routes.getProd);
app.post('/prod', routes.postProd); //llama a postprod, que está en routes
app.delete('/prod/:id', routes.deleteProd); //se llama al ido del producto para que sepa cuál es el producto que se está borrando. Se le pasa por url, por ruta. No usa el body parser, por lo que tiene que recuperar la data de otra forma.
app.put('/prod/:id', routes.putProd); //tiene que enviar dos datos: a cuál y con qué

app.get('*', routes.notFound);

db.conectarDB(()=> { //el callback es el que viene como cb por db.js
    app.listen(PORT, err => {
        if (err) return console.log(`Error en Server express: ${err}`);
        console.log(`Servidor express listen in ${PORT}`);
    })
});

