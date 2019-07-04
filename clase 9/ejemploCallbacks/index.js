//ejecucion sincronica:

//bloqueante:

function getNombre(nombre) {
    return nombre.toUpperCase();
}

let nombre = getNombre('Pedro');
console.log(nombre);

nombre = getNombre(nombre + 'a');
console.log(nombre);

nombre = getNombre(nombre + 'b');
console.log(nombre); 

nombre = getNombre(nombre + 'v');
console.log(nombre); 
nombre = getNombre(nombre + 'd');
console.log(nombre); 
nombre = getNombre(nombre + 'e');
console.log(nombre); 
nombre = getNombre(nombre + 'f');
console.log(nombre); 
nombre = getNombre(nombre + 'g');
console.log(nombre); 
nombre = getNombre(nombre + 'h');
console.log(nombre); 

console.log('tarea del final'); 

//van sumandose las letras y encadenandose. Todas son bloqueantes.

////////////////////////////////////////

//otra forma bloqueante:
/*
function getNombre(nombre) {
    let nombreNuevo = nombre.toUpperCase();
    console.log(nombreNuevo)
    return nombreNuevo
}

let nombre = getNombre('Pedro');
nombre = getNombre(nombre + 'a');
nombre = getNombre(nombre + 'b');*/
//esto en node no es admitido porque bloquea el loop. Debe pasarse callback a la funcion para que haga la llamada cuando esté lista

//////////////////////////////////////////////

//Ejecucion asincronica con callback:

function getNombreCallback(nombre, cb) {
    let nombreNuevo = nombre.toUpperCase();
    console.log(nombreNuevo);
    if (cb) {
//        cb(nombreNuevo)

//settimeout tiene parametros y un tiempo, que va despues
setTimeout(cb, 1000, nombreNuevo);
    }
}
//infierno de callbacks:
getNombreCallback('callback', nombre => {
    getNombreCallback(nombre + 'a', nombre => {
        getNombreCallback(nombre + 'b', nombre => {
            getNombreCallback(nombre + 'c', nombre => {
                getNombreCallback(nombre + 'd', nombre => {
                    getNombreCallback(nombre + 'e', nombre => {
                        getNombreCallback(nombre + 'f', nombre => {
                            getNombreCallback(nombre + 'g', nombre => {
                                getNombreCallback(nombre + 'h', nombre => {
                                    console.log('fin')
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})

console.log('cosa afuera') //esta se ejecuta entre los callback, no espera a que termine porque no se bloquea

//otro infierno de callbacks:

function getNombreCallback(nombre, cb) {
    let nombreNuevo = nombre.toUpperCase();
    console.log(nombreNuevo);
    if (cb) {
//        cb(nombreNuevo)

//settimeout tiene parametros y un tiempo, que va despues
setTimeout(cb, 1000, nombreNuevo);
    }
}
//infierno de callbacks:
getNombreCallback('infierno', nombre => {
    getNombreCallback(nombre + 'a', nombre => {
        getNombreCallback(nombre + 'b', nombre => {
            getNombreCallback(nombre + 'c', nombre => {
                getNombreCallback(nombre + 'd', nombre => {
                    getNombreCallback(nombre + 'e', nombre => {
                        getNombreCallback(nombre + 'f', nombre => {
                            getNombreCallback(nombre + 'g', nombre => {
                                getNombreCallback(nombre + 'h', nombre => {
                                    console.log('fin')
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})

console.log('cosa afuera') 