import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';

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
      nombre: '',
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
