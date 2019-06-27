//fizzbuzz con const y let:
/*
const  divisiblePor = function(numero, divisor) {
    return numero % divisor == 0;
}

for (let numero=1; numero <=20; numero++) {
    let mensaje = '';

    if(!divisiblePor(numero,3) && !divisiblePor(numero,5)) mensaje = numero;
    else {
        if(divisiblePor(numero,3)) mensaje = 'Fizz ';
        if(divisiblePor(numero,5)) mensaje += 'Buzz';
    }
    console.log(mensaje)
}

*/

//fizzbuzz con lambda:

function suma(a,b) {
    return a+b
}

const suma2 = function(a,b) {
    return a + b
}

//arrow function:
const suma3 = (a,b) => a + b

//si quiero que sea de más de una línea
const suma4 = (a,b) => {
    return a + b
}

//cuando es un solo parámetro, no requiere parentesis
const cuadrado = a => a*a;

//sin parámetros:
const mensaje = () => 'hola'

//sin retorno en la llamada:
const mensaje2 = () => console.log('hola2')

//si no quiero retornar nada:
const mensaje3 = () => {
    console.log('hola3')
}

console.log(suma(4,5))
console.log(suma2(4,5))
console.log(suma3(4,5))
console.log(suma4(4,5))
console.log(cuadrado(4))
console.log(mensaje())
mensaje2()
mensaje3()

const  divisiblePor = function(numero, divisor) {
    return numero % divisor == 0;
}

for (let numero=1; numero <=20; numero++) {
    let mensaje = '';

    if(!divisiblePor(numero,3) && !divisiblePor(numero,5)) mensaje = numero;
    else {
        if(divisiblePor(numero,3)) mensaje = 'Fizz ';
        if(divisiblePor(numero,5)) mensaje += 'Buzz';
    }
    console.log(mensaje)
}
