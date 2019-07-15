//base de datos:
const db = require('./db');

//get:
function getProd(req, res) {
    db.readDB()
        .then(productos => res.send({ data: productos }))
        .catch(err => res.send({ data: err }))
}

//post:
function postProd(req, res) {
    let producto = req.body;
    console.log('post: ' + producto)

    db.saveDB(producto)
        .then(productos => res.send({ producto })) //devolver nuevo producto al backend
        .catch(err => res.send({ data: err }))
}

//put:
function putProd(req, res) {
    let id = req.params.id //recuperar parametro de /:id
    let producto = req.body;
    console.log('put: ' + id, producto)

    db.updateDB(producto, id)
        .then(prod => res.send({ data: prod }))
        .catch(err => res.send({ data: err }))
}

//delete:
function deleteProd(req, res) {
    let id = req.params.id //recuperar parametro de /:id
    console.log('delete: ' + id)

    db.deleteDB(id)
        .then(productos => res.send({ data: id }))
        .catch(err => res.send({ data: err }))
}

//fallback:
function notFound(req, res) {
    res.send({ respuesta: 'Pagina no encontrada' })
}

//exports:
module.exports = {
    getProd,
    postProd,
    putProd,
    deleteProd,
    notFound
}
