const util = require('./util');
const db = require('./db');


function getProd(req, res) {
    db.readDB()
    .then( prods => res.send({data: prods}))
    .catch( err => res.send({data: err}))
}

function postProd(req, res) {
    let producto = req.body;
    console.log(producto);

    db.saveDB(producto)
    .then( prods => res.send(producto))
    .catch( err => res.send({data: err}))
}

function deleteProd(req, res) {
    let id = req.params.id;
    console.log(id);

    db.deleteDB(id)
    .then( prods => res.send({data: id}))
    .catch( err => res.send({data: err}))
}

function putProd(req, res) {

    let id = req.params.id;
    let producto = req.body;
    console.log('put', id, producto);

    db.updateDB(producto, id)
    .then( prod => res.send({data: prod}))
    .catch( err => res.send({data: err}))
}

function notFound(req,res) {
    res.send({respuesta: 'Pagina no encontrada'});
}

module.exports = {
    getProd,
    postProd   ,
    deleteProd ,
    putProd,
    notFound
}
