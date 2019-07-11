const getIndexById = (productos,id) => productos.findIndex( prod => prod.id == id); //funcion que se le pasa productos e id (el array de productos) Se llamaba al findIndex para que busque índices que coincidan con la ocurrencia de prod.id == id. Cuando encuentra la coincidencia devuelve el index. Con ese indice se podía hacer el splice o sumar objetos.

module.exports = {
    getIndexById  
}