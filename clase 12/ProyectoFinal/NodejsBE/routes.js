const util = require('./util');
const db = require('./db');


function getProd(req, res) {
    db.readDB() //lee la base de datos, esa funcion db es la del require de linea 2
    .then( prods => res.send({data: prods})) //no bloquea mientras lee base de datos, sino que llama a then o catch de acuerdo al resultado. Si funciona, lee productos como array y devuelve a angular este prods
    .catch( err => res.send({data: err}))
}

function postProd(req, res) {
    let producto = req.body;
    console.log(producto);

    db.saveDB(producto)
    .then( prods => res.send(producto)) //devuelve al backend el producto. Si falla, devuelve error.
    .catch( err => res.send({data: err}))
}

function deleteProd(req, res) {
    let id = req.params.id; //acá es donde recupera el parámetro que se le pasó como :id en server.js
    console.log(id);

    db.deleteDB(id)
    .then( prods => res.send({data: id}))
    .catch( err => res.send({data: err}))
}

function putProd(req, res) {

    let id = req.params.id;
    let producto = req.body; //recupera el cuerpo
    console.log('put', id, producto);

    db.updateDB(producto, id) //se llama método de update y se le pasan producto e id
    .then( prod => res.send({data: prod}))
    .catch( err => res.send({data: err}))
}

function notFound(req,res) {
    res.send({respuesta: 'Pagina no encontrada'});
}

module.exports = { //routes exporta un objeto
    getProd,
    postProd   ,
    deleteProd ,
    putProd,
    notFound
}
