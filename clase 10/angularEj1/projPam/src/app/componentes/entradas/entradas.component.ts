import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entradas',
  templateUrl: './entradas.component.html',
  styleUrls: ['./entradas.component.css']
})
export class EntradasComponent implements OnInit {

  //propiedades
  mensaje: string = 'mensaje 1';
  valor: number = 23456;
  valor2: number = 789;
  valor3: number = 123;
  contador: number = 0;

  constructor() {
    console.log('hola soy el constructor')
   }

  ngOnInit() { //ngOnInit es un hook
    console.log('hola soy el hook')
  }

  //metodos:

  incrementar() {
    console.log('incrementar')
    this.contador++;
  }

  actualizar(e) {
    let dato = e.target.value;
    console.log(dato)
    this.valor2 = dato
  }

  }
