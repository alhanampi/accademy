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
        productoModel.updateOne({_id: id}, {$set: prod}, err => {
            if(err) reject(err)
            else resolve(prod);
        });
    })
}

function deleteDB(id) {
    return new Promise((resolve, reject) => {
        productoModel.deleteOne({ _id: id }, err => {
            if(err) reject(err)
            else resolve();
        });
    })
}


function saveDB(prod) {
    return new Promise((resolve, reject) => {
        let productoSave = new productoModel(prod);
        productoSave.save(err => {
            if(err) reject(err)
            else resolve();
        });
    })
}

function readDB(prod) {
    return new Promise((resolve, reject) => {
        productoModel.find({}, (err, prods) => {
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

function iniDB() {
    saveDB(listaProductos[0])
    .then(()=>saveDB(listaProductos[1]))
    .then(()=>saveDB(listaProductos[2]))
    .then(()=>saveDB(listaProductos[3]))
    .catch( err => console.log('ERROR INI: ', err));
}


function conectarDB(cb) {
    mongoose.connect('mongodb://localhost/ecommerce', {useNewUrlParser: true}, err => {
        if(err) return console.log(`Error en conexión de ${err}`);
        console.log('Base de datos conectada');
        
        //iniDB();

        if(cb) cb();
    });
}

module.exports = {
    readDB,
    saveDB,
    deleteDB,
    updateDB,
    conectarDB
}