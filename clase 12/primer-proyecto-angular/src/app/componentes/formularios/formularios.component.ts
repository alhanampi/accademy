import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { VerificarEspacios } from 'src/app/validaciones/espacios.validator';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent implements OnInit {

  form: FormGroup;
  constructor(private fb: FormBuilder) { 
    this.form = fb.group({
      nombre: ['',Validators.compose([
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(5),
        VerificarEspacios //lo importa desde la validacion que creé
      ])],
      apellido: '',
      edad: '',
      curso: '',
      contacto: fb.group({
        email: '',
        telefono: ''
      }),
      foto: ''
    })
  }

  ngOnInit() {
  }

  enviar() {
    console.log(this.form.value);
  }

}
