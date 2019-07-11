import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entradas',
  templateUrl: './entradas.component.html',
  styleUrls: ['./entradas.component.css']
})
export class EntradasComponent implements OnInit {

  mensaje : string = 'Mensaje 1';
  valor1 : number = 456;
  valor2 : number = 789;
  valor3 : number = 123;
  contador : number = 0;

  constructor() {
    console.log('Hola soy el constructor!');
  }

  ngOnInit() {
    console.log('Hola soy el hook ngOnInit!');
  }

  ngOnDestroy() {
    console.log('Hola, soy el hook ngOnDestroy!') //va a mostrar esto cuando cambie de componente porque el hook murió
  }

  incrementar() {
    console.log('incrementar');
    this.contador++;
  }

  actualizar(e) {
    let dato = e.target.value;
    console.log(dato);
    this.valor2 = dato;
  }


}
