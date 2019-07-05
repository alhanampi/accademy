import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estructuras',
  templateUrl: './estructuras.component.html',
  styleUrls: ['./estructuras.component.css']
})
export class EstructurasComponent implements OnInit {
  mostrar: boolean = true;
  usuarios: string[] = [
    'Pedro',
    'Pablo',
    'Ana',
    'Lucía'
  ];

  errorForm: boolean = false;

  //la otra forma de declarar un array es:
  //usuarios: Array<string> = []

  //aray de objetos:

  alumnos: any[] = [
    {
      nombre: 'Pedro',
      apellido: 'Gomez',
      edad: 34,
      curso: true,
      foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/4_avatar-256.png'
    }, {
      nombre: 'Lucas',
      apellido: 'Perez',
      edad: 37,
      curso: false,
      foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/7_avatar-256.png'
    }, {
      nombre: 'Ana',
      apellido: 'Gonzalez',
      edad: 24,
      curso: true,
      foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/11_avatar-256.png'
    }, {
      nombre: 'Lucía',
      apellido: 'Gimenez',
      edad: 29,
      curso: false,
      foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/5_avatar-256.png'
    }
  ];

  alumno = {
    nombre: '',
    apellido: '',
    edad: '',
    curso: '',
    foto: ''

  };

  constructor() { }

  ngOnInit() {
  }

  //pasa el valor por index y lo elimina
  borrar(index) {
    this.alumnos.splice(index, 1);
  }

  agregar() {
    console.log(this.alumno)
    if (
      this.alumno.nombre != '' &&
      this.alumno.apellido != '' &&
      this.alumno.edad != '' &&
      this.alumno.foto != ''
    ) {
      this.errorForm = false;
      this.alumnos.push(this.alumno)
      this.alumno = {
        nombre: '',
        apellido: '',
        edad: '',
        curso: '',
        foto: ''
      }
    } else {
      this.errorForm = true;
      setTimeout( () => {
        this.errorForm = false;
      }, 1500)
    }
  }

}
