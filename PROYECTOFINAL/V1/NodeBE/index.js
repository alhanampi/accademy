const express = require('express');
const app = express();

const PORT = 8080;



app.listen(PORT, err => {
    if (err) return console.log('error')
    console.log(`Escuchando puerto ${PORT} con express`)
})

//me muestra esto aunque tenga toda la data en server.js y haya puesto en el package que ese es el archivo de entrada. Si paso la data acá, me dice que no encuentra db y crashea