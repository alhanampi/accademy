const express = require('express');
const bodyParser = require('body-parser') //para poder hacer pedidos con post
const app = express();

const PORT = 8080;

//el objeto extended habilita a que lleguen más cosas por post. Habilita a que más campos type puedan ser parseados. 
app.use(bodyParser.urlencoded({extended: true}))

app.use((req, res, next) => {
    console.log(req.url); //devuelve toda la data del req
    next(); //muestra el log y continua, no detiene ejecucion. Sin el next quedaría acá y se colgaría 
//    res.send('este es el app.use')
})

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html');
})

app.get('/datos', (req,res) => {
    let datos = req.query;
    console.log('get', datos);
    res.send(datos);
})

app.post('/datos',(req, res) => {
  //si hiciera esto devolvería un objeto vacío, ya que query es para get:
/*    let datos = req.query;
    res.send(datos)
  */  
 //con body-parser:
    let datos = req.body //body es algo que suma el bodyParser, para poder recibir esos datos.
    res.send(datos) //devuelve como objeto
    console.log('post', datos)
    })


//para atrapar rutas no validas
app.get('*', (req, res) => {
    res.send('ruta no encontrada')
})

app.listen(PORT, err => {
    if(err) return console.log(`Error en express ${err}`)
    console.log(`Servidor express listen in ${PORT}`);
})