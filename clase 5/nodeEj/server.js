function sumar(a, b) {
    return a + b;
}

console.log(sumar(3,5))

function sumar2(a,b,cb) { //cb es callback
    if(cb) {
        cb(a+b)
    }
}

sumar2(3,3, resultado => { 
    //resultado se va a copiar a cb, y ahí es cuando va a ejecutar el a+b. Es poner la funcion de sumar en resultado.
    console.log(resultado)
})

//tiene un solo parámetro, el resultado, y va a dar un log de ese. El tercer parámetro de la suma abajo es callback
function callback(resulta) {
    console.log(resulta)
}

sumar2 (4,5,callback) 


//////////////////

const http = require('http');
const PORT = 8080; //constante así puedo pasarlo como variable en el listen

//funcion de callback: funcion externa que se pasa como parámetro
function request(req, res) {
    //res.end('conectado al server!') 
    //se puede hacer también de esta forma, transimitiendo primero y cerrando después:
    res.write('conectado al server!')
    res.end();
}

//server es un objeto referencia al que se le va a aplicar el listen:
const server = http.createServer(request) //es una referencia que paso, no es lo mismo que pasar una constante de configuracion como PORT. El request es un callback.

//puerto que se escucha, y qué pasa si da error
server.listen(PORT, err => {
    if (err) return console.log(`El error es ${err}`) //si hay error, devolver este console.log y salir del programa. Con ese return no lee ese console.log de abajo.
    console.log(`escuchando puerto ${PORT}`)
})

