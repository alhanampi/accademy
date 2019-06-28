console.log('Ejercicio 2-5');
/*
En una entrevista de trabajo le solicitan hacer un FizzBuzz, éste
programa muestra los números del 1 al 10, pero con las siguientes
características: siempre se muestra el número al usuario salvo que sea
divisible por 3, en cuyo caso se muestra la palabra Fizz, o divisible por 5,
en cuyo caso se muestra la palabra Buzz. Si es divisible tanto por 5 como
por 3, se mostrará FizzBuzz. 
*/
/*
function esDivisiblePor(numero, divisor) {
    return numero % divisor == 0;
}
*/

const esDivisiblePor = function(numero, divisor) {
    return numero % divisor == 0;
}
 
function suma(a,b) {
    return a + b;
}

const suma2 = function(a,b) {
    return a+ b;
}
const suma3 = (a,b) => a + b;
const suma4 = (a,b) => {
    return a + b;
}

const cuadradoDe = a => a*a;
const mostrarMensaje = () => 'hola!';
const mostrarMensaje2 = () => {
    console.log('hola2!');
}
const dobleDe = a => a*2;


console.log(suma(4,5));
console.log(suma2(4,5));
console.log(suma3(4,5));
console.log(suma4(4,5));
console.log(cuadradoDe(4));
console.log(mostrarMensaje());
mostrarMensaje2();
console.log(dobleDe(2));

let a = [1,2,3];
let b = a;
a[1] = 11;
console.log(a);
console.log(b);

let usuario1 = {
    nombre : 'Juan',
    apellido: 'Perez',
    edad: 34,
    getEdad: function() {
        return this.edad;
    },
    setEdad: function(edad) {
        console.log(new Date().toLocaleString())
        this.edad = edad;
    }
}

let usuario2 = {
    nombre : 'Ana',
    apellido: 'González',
    edad: 27,
    getEdad() {
        console.log(this.edad);
    },
    setEdad(edad) {
        console.log(new Date().toLocaleString())
        this.edad = edad;
    }
}

let usuarios = [usuario1, usuario2];




for(let numero=1; numero<=20; numero++) {
    let mensaje = '';
    if(!esDivisiblePor(numero,3) && !esDivisiblePor(numero,5)) mensaje = numero;
    else {
        if(esDivisiblePor(numero,3)) mensaje = 'Fizz';
        if(esDivisiblePor(numero,5)) mensaje += 'Buzz';
    }
    //console.log(mensaje);
}
//console.log(numero);