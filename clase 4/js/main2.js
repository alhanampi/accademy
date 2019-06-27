let usuario1 = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 22,
    getEdad: function() {
        return this.edad;
    },
    setEdad: function(edad) {
        console.log(new Date().toLocaleDateString()); //para que imprima la fecha de modificacion del dato
        this.edad = edad;
    }
}

let usuario2 = {
    nombre: 'Ana',
    apellido: 'Gomez',
    edad: 25,
    getEdad: function() {
        return this.edad;
    },
    setEdad: function(edad) {
        console.log(new Date().toLocaleDateString()); //para que imprima la fecha de modificacion del dato
        this.edad = edad;
    }
}

//array conteniendo los objetos:
let usuarios = [usuario1, usuario2]
//se puede acceder con usuarios[1].apellido