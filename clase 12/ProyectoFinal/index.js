//Ejecucion asincronica con promises:

function getNombrePromesas(nombre) {
    return new Promise((resolve, reject) => {
        let tipo = typeof nombre;
        if (tipo == 'string') {
            let nombreNuevo = nombre.toUpperCase();
            console.log(nombreNuevo);
            setTimeout(resolve, 1000, nombreNuevo);
        } else {
            //creo un objeto para error
            let error = {
                nombre, //es lo mismo que poner nombre:nombre
                tipo
            }
            reject(error);
        }
    })
}

//se llama y retorna una promesa
/*getNombrePromesas('120')
    .then( nombre => console.log(nombre, 'then')) //se llama al then un seg despues por el timeout
    .catch( error => console.log('error!', error)) //el catch es para agarrar el error*/

//Anidar thens;

getNombrePromesas('120')
    .then(nombre => getNombrePromesas(nombre + 'a')) //se llama al then un seg despues por el timeout
    .then(nombre => getNombrePromesas(nombre + 'b'))
    .then(nombre => getNombrePromesas(nombre + 'c'))
    //.then(nombre => getNombrePromesas(2)) //esto cortaría el loop porque va al catch, pero la otra sigue ejecutando
    .then(nombre => getNombrePromesas(nombre + 'd'))
    .then(nombre => getNombrePromesas(nombre + 'e'))
    .then(nombre => getNombrePromesas(nombre + 'f'))
    .then(nombre => getNombrePromesas(nombre + 'g'))
    .then(nombre => getNombrePromesas(nombre + 'h'))
    .then(nombre => console.log('fin!'))
    .catch(error => console.log('error!', error))

    getNombrePromesas('Juan')
    .then(nombre => getNombrePromesas(nombre + 'a')) //se llama al then un seg despues por el timeout
    .then(nombre => getNombrePromesas(nombre + 'b'))
    .then(nombre => getNombrePromesas(nombre + 'c'))
    .then(nombre => getNombrePromesas(nombre + 'd'))
    .then(nombre => getNombrePromesas(nombre + 'e'))
    .then(nombre => getNombrePromesas(nombre + 'f'))
    .then(nombre => getNombrePromesas(nombre + 'g'))
    .then(nombre => getNombrePromesas(nombre + 'h'))
    .then(nombre => console.log('fin!'))
    .catch(error => console.log('error!', error))