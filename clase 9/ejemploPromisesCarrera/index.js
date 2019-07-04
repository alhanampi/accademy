//Carreras

function getNombrePromesas(nombre, retardo) {
    return new Promise((resolve, reject) => {
        let tipo = typeof nombre;
        if (tipo == 'string') {
            let nombreNuevo = nombre.toUpperCase();
            console.log(nombreNuevo);
            setTimeout(resolve, retardo, nombreNuevo);
        } else {
            let error = {
                nombre,
                tipo
            }
            reject(error);
        }
    })
}



getNombrePromesas('Pedro', 1000)
    .then(nombre => getNombrePromesas(nombre + 'a', 1000)) //se llama al then un seg despues por el timeout
    .then(nombre => getNombrePromesas(nombre + 'b', 1000))
    .then(nombre => getNombrePromesas(nombre + 'c', 1000))
    //.then(nombre => getNombrePromesas(2)) //esto cortaría el loop porque va al catch, pero la otra sigue ejecutando
    .then(nombre => getNombrePromesas(nombre + 'd', 1000))
    .then(nombre => getNombrePromesas(nombre + 'e', 1000))
    .then(nombre => getNombrePromesas(nombre + 'f', 1000))
    .then(nombre => getNombrePromesas(nombre + 'g', 1000))
    .then(nombre => getNombrePromesas(nombre + 'h', 1000))
    .then(nombre => console.log('fin de Pedro!'))
    .catch(error => console.log('error!', error))

    getNombrePromesas('Juan')
    .then(nombre => getNombrePromesas(nombre + 'a', 1000)) //se llama al then un seg despues por el timeout
    .then(nombre => getNombrePromesas(nombre + 'b', 1000))
    .then(nombre => getNombrePromesas(nombre + 'c', 1000))
    .then(nombre => getNombrePromesas(nombre + 'd', 1000))
    .then(nombre => getNombrePromesas(nombre + 'e', 1000))
    .then(nombre => getNombrePromesas(nombre + 'f', 1000))
    .then(nombre => getNombrePromesas(nombre + 'g', 1000))
    .then(nombre => getNombrePromesas(nombre + 'h', 1000))
    .then(nombre => console.log('fin de Juan!'))
    .catch(error => console.log('error!', error))

//////////////////////////////////////////

//carreras:



//recibe un array de funciones que retornan promesas
Promise.race([
	getNombrePromesas('Federico', 4000),
	getNombrePromesas('Hector', 2000),
	getNombrePromesas('Alberto', 5000)
])
	.then(gano => console.log('ganó: ', gano))
	.catch(error => console.log('ERROR!', error))
	//si alguno de los competidores fuera un number, no hay carrera.

	//promise all:

	Promise.all([
	getNombrePromesas('Juan', 4000),
	getNombrePromesas('Ana', 2000),
	getNombrePromesas('Paula', 5000)
])
	.then(gente => console.log('ok todos!: ', gente)) //solo imprime cuando todos han terminado
	.catch(error => console.log('ERROR!', error))