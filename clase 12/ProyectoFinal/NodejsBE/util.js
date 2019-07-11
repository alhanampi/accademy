const getIndexById = (productos,id) => productos.findIndex( prod => prod.id == id);

module.exports = {
    getIndexById  
}