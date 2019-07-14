//mongoose:
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//schema de producto:
const productoSchema = new Schema({
    id: Number,
    item: String,
    precio: Number, //en productos.service.ts lo pasé como any, ver si da errores
    descripcion: String,
    foto: String,
})

const modelo = mongoose.model('productos', productoSchema); //ver que productos no de problemas con todo lo que ya se llama así

//read/get:
function readDB(prod) { //puedo prescindir del prod?
    return new Promise((resolve, reject) => {
        modelo.find({}, (err, prods) =>{ 
            if(err) reject(err)
            else resolve(prods)
        })
    })
}

//save/post:
function saveDB(prod) { //salva en mongo
    return new Promise((resolve, reject) => {
        let saveProd = new modelo(prod); //crea objeto nuevo
        saveProd.save(err =>{ 
            if(err) reject(err)
            else resolve()
        })
    })
}

//update/put:
function updateDB(prod, id) {  //actualiza objeto
    return new Promise((resolve, reject) => {
        modelo.updateOne({_id: id}, {$set: prod}, err =>{ //update one actualiza todo el producto
            if(err) reject(err)
            else resolve(prod)
        })
    })
}

//delete:
function deleteDB(id) { 
    return new Promise((resolve, reject) => {
        modelo.deleteOne({_id: id}, err =>{ //borrar por id
            if(err) reject(err)
            else resolve()
        })
    })
}

//listado harcodeado de test:
listado = [
    {
        id: 1,
        item: 'Taza Pokemon',
        precio: '$99.99',
        descripcion: 'Taza Eevee',
        foto: '../../AngularFE/proyectoFinal/src/assets/products/poke/poke01.jpg'
    }, 
    {
        id: 2,
        item: 'Jarra Pokemon Pikachu',
        precio: '$399.99',
        descripcion: 'Pikachu en una bola de nieve',
        foto: '../../AngularFE/proyectoFinal/src/assets/products/poke/poke02.jpg'
    },
    {
        id: 3,
        item: 'Remera Pokemon',
        precio: '$249.99',
        descripcion: 'Remera mujer Mew2',
        foto: '../../AngularFE/proyectoFinal/src/assets/products/poke/poke03.jpg'
    }
]

//insertar base de datos hardcodeada:
function iniDB() {
    saveDB(listado[0])
    .then(() => saveDB(listado[1]))
    .then(() => saveDB(listado[2]))
    .catch(err => console.log('ERROR EN CONEXION DB: ', err))
}

//funcion conectar parser y crear db:

function conectarDB(cb) {
    mongoose.connect('mongodb://localhost/ecommerce', {useNewUrlParser:true}, err => {
        if(err) return console.log(`Error en conexión: ${err}`);
        console.log('base de datos conectada');

        iniDB() //funcion carga de base de datos harcodeada

        if(cb) cb() //callback de conectarDB de server.js
    })
}


module.exports = {
    readDB,
    saveDB,
    updateDB, 
    deleteDB, 
    conectarDB
}