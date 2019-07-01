const express = require('express');
const app = express();

const PORT = 8080;

app.get('/', (req, res) => {
    res.write(`
    <h1> Conectado con Express!! </h1>
    `)
})

app.listen(PORT, err => {
    if (err) return console.log('error')
    console.log(`Escuchando puerto ${PORT} con express`)
})