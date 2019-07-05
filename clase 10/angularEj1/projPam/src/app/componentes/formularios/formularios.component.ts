import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.form = fb.group({ //grupo de datos
      nombre: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(16),
        Validators.minLength(3)
      ])], //[] para hacer validaciones
      apellido: '',
      edad: '',
      curso: '',
      contacto: fb.group({ //nuevo grupo
        email: '',
        telefono: '',
      }), 
      foto: ''
    })
   }

  ngOnInit() {
  }

enviar() {
  console.log(this.form.value)
}

}
