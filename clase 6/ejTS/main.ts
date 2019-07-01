let mensaje: string = 'hola4 typescript';

console.log(mensaje);

mensaje = 'cosa';
mensaje = 'uno';


class Animal {
    move(distanceInMeters: number = 0) {
        console.log(`Animal moved ${distanceInMeters}m.`);
    }
}

class Dog extends Animal {
    bark() {
        console.log('guau! guau!');
    }
}

const dog = new Dog();
dog.bark();
dog.move(20);
dog.bark();