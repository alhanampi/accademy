import { Component, OnInit } from '@angular/core';
import { AlumnosService } from 'src/app/servicios/alumnos.service';

@Component({
  selector: 'app-atributos',
  templateUrl: './atributos.component.html',
  styleUrls: ['./atributos.component.css']
})
export class AtributosComponent implements OnInit {

  estado1: boolean = true; //así empieza siendo true y se ve el texto
  estado2: boolean = true;

  alumnos2: Object[]; /* paso los datos del servicio acá */

  constructor(private alumnosService:AlumnosService) { /* importo de forma privada el servicio */

    this.alumnos2 = this.alumnosService.alumnos2 /* pongo el servicios */
   }

  ngOnInit() {
  }

}
