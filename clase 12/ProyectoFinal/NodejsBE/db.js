const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productoSchema = new Schema({
    id: Number,
    item: String,
    stock: Number,
    foto: String
})

const productoModel = mongoose.model('productos', productoSchema);


function updateDB(prod, id) {
    return new Promise((resolve, reject) => {
        productoModel.updateOne({_id: id}, {$set: prod}, err => { //es como el find. updateOne es un método del mongoose. Se le pasa para que actualice todo el producto. Se le podría pasar a que actualice solo ciertas claves
            if(err) reject(err)
            else resolve(prod);
        });
    })
}

function deleteDB(id) {
    return new Promise((resolve, reject) => {
        productoModel.deleteOne({ _id: id }, err => { //se llama al model.deleteOne y se le indica a quién debe borar. El id que se le pasa es el del object id. Es un filtro de búsqueda, busca el documento que quiere borrar
            if(err) reject(err)
            else resolve();
        });
    })
}


function saveDB(prod) { //salva a una mongo
    return new Promise((resolve, reject) => {
        let productoSave = new productoModel(prod); //salva creando un objeto nuevo
        productoSave.save(err => {
            if(err) reject(err)
            else resolve();
        });
    })
}

function readDB(prod) { //no usa el producto que se le está pasando
    return new Promise((resolve, reject) => { //retorna una promesa. Se le pasa un callback con dos callback adentro y queda pendiente hasta que se llama a resolve o reject
        productoModel.find({}, (err, prods) => { //llama con esos dos y manda error como parámetro o resuelve con productos. Todos hacen este mismo mecanismo
            if(err) reject(err)
            else resolve(prods);
        });
    })
}



listaProductos = [
    {id: 1, item: 'Zapatilla', stock: 36, foto: 'https://cdn0.iconfinder.com/data/icons/women-shoes-line-color-pinky-fashion/512/Wedge_sneaker-256.png'},
    {id: 2, item: 'Sueter', stock: 27, foto: 'https://cdn1.iconfinder.com/data/icons/clothes-outfit-line-shop-aholic/512/Hooded_top-256.png'},
    {id: 3, item: 'Camisa', stock: 41, foto: 'https://cdn1.iconfinder.com/data/icons/clothes-outfit-line-shop-aholic/512/Pyjamas-256.png'},
    {id: 4, item: 'Pantalon', stock: 23, foto: 'https://cdn1.iconfinder.com/data/icons/clothes-outfit-line-shop-aholic/512/Jeans-256.png'}
]

function iniDB() { //esta funcion injerta la base de datos
    saveDB(listaProductos[0])
    .then(()=>saveDB(listaProductos[1]))
    .then(()=>saveDB(listaProductos[2]))
    .then(()=>saveDB(listaProductos[3]))
    .catch( err => console.log('ERROR INI: ', err));
}


function conectarDB(cb) { //acá crea la base de datos. Conecta con el parser
    mongoose.connect('mongodb://localhost/ecommerce', {useNewUrlParser: true}, err => {
        if(err) return console.log(`Error en conexión de ${err}`);
        console.log('Base de datos conectada');
        
        //iniDB();

        if(cb) cb(); //llama al callback si está todo bien. Ese callback es el conectarDB de server.js
    });
}

module.exports = {
    readDB,
    saveDB,
    deleteDB,
    updateDB,
    conectarDB
}