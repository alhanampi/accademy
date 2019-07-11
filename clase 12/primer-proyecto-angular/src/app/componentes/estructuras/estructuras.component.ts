import { Component, OnInit, Input } from '@angular/core';
import { AlumnosService } from 'src/app/servicios/alumnos.service';

@Component({
  selector: 'app-estructuras',
  templateUrl: './estructuras.component.html',
  styleUrls: ['./estructuras.component.css']
})
export class EstructurasComponent implements OnInit {



  mostrar : boolean = true;
  //usuarios : Array<string> = [];
  usuarios : string[] = [
    'Pedro',
    'Pablo',
    'Ana',
    'Lucia'
  ]
  errorDatosFormulario : boolean = false;

/*   alumnos : object[] = [
    {nombre: 'Pedro', apellido: 'Lopez', edad: 34, curso: true, foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-256.png'},
    {nombre: 'Lucas', apellido: 'Gimenez', edad: 45, curso: !true, foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/1_avatar-256.png'},
    {nombre: 'Ana', apellido: 'Sanchez', edad: 29, curso: !true, foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/11_avatar-256.png'},
    {nombre: 'Lucia', apellido: 'Picos', edad: 26, curso: true, foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/9_avatar-256.png'}
  ] */

  alumno = {
    nombre: '',
    apellido: '',
    edad: '',
    curso: '',
    foto: ''
  }

  alumnos: Object[]; /* ese Object es el objeto padre de todo. Es por JS el tenerlo en mayuscula. Tiene que ser object array, no object como tipo */

  constructor(private alumnosService:AlumnosService) {
    this.alumnos = this.alumnosService.alumnos2;

   }

  ngOnInit() {
  }

  borrar(index) {
    this.alumnos.splice(index,1);
  }

  agregar() {
    
    console.log(this.alumno);
    if(
      this.alumno.nombre != '' &&
      this.alumno.apellido != '' &&
      this.alumno.edad != '' &&
      this.alumno.foto != ''
    ) 
    {
      this.errorDatosFormulario = false;
      this.alumnos.push(this.alumno);
      this.alumno = {
        nombre: '',
        apellido: '',
        edad: '',
        curso: '',
        foto: ''
      }
    }
    else {
      this.errorDatosFormulario = true;
    }
  }

}
