const express = require('express');
const app = express();

const PORT = 8080;

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html');
})

app.get('/datos', (req,res) => {
    let datos = req.query;
    console.log(datos);
    res.send(datos);
})

app.post('/datos',(req, res) => {

})

app.listen(PORT, err => {
    if(err) return console.log(`Error en express ${err}`)
    console.log(`Servidor express listen in ${PORT}`);
})