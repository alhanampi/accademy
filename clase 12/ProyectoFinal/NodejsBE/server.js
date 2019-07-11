const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const routes = require('./routes');
const db = require('./db');

const PORT = 8080;

const app = express()

app.use(express.static(__dirname + '/views'));
app.use(cors());
app.use(bodyParser.json());



app.get('/', function (req, res) {

})

app.get('/prod', routes.getProd);
app.post('/prod', routes.postProd);
app.delete('/prod/:id', routes.deleteProd);
app.put('/prod/:id', routes.putProd);

app.get('*', routes.notFound);

db.conectarDB(()=> {
    app.listen(PORT, err => {
        if (err) return console.log(`Error en Server express: ${err}`);
        console.log(`Servidor express listen in ${PORT}`);
    })
});

