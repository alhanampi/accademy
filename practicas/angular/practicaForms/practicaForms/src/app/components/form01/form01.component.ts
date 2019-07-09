import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms'

@Component({
  selector: 'app-form01',
  templateUrl: './form01.component.html',
  styleUrls: ['./form01.component.css']
})
export class Form01Component implements OnInit {

  form: FormGroup;
  showError: boolean = false; //para hacer un timeout

  constructor( private fb: FormBuilder) { //por qué marca como no usado al fb?
    this.form = fb.group({
      name: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(16)
      ])],
      surname: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(16)
      ])],
      age: ['', Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(3) //no me lo toma. El resto sí funciona
      ])],
      picture: ''
    })
   }

  ngOnInit() {
  }

  send() {
    console.log(this.form.value)
  }

  //quiero dar un timeout, pero no sé cómo. Tengo la funcion pero no sé cómo pasarla
  error() {
    this.showError = true;
    setTimeout( () => {
      this.showError = false;
    }, 1500)
  }

}
