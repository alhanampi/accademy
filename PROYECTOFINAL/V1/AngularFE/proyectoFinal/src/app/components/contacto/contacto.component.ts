import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms'
import swal from 'sweetalert';
//import { mensaje } from 'src/app/services/mensajes.service';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})

export class ContactoComponent implements OnInit {

  form: FormGroup;
  //errorForm: boolean = false

  //mensaje: mensaje; //esto está bien puesto?

  //pusheo a mensajes?

  constructor(/*private fb: FormBuilder*/) {
  //   this.form = fb.group({
  //     nombre: '',
  //     // ['',Validators.compose([
  //     //   Validators.required,
  //     //   Validators.maxLength(15),
  //     //   Validators.minLength(3),
  //     // ])],
  //     email: '',
  //     // ['',Validators.compose([
  //     //   Validators.required,
  //     //   Validators.maxLength(15),
  //     //   Validators.minLength(3),
  //     // ])],
  //     telefono: '',
  //     mensaje: ''
  //     //  ['',Validators.compose([
  //     //   Validators.required,
  //     //   Validators.maxLength(50),
  //     //   Validators.minLength(15),
  //     // ])],
  //  })
  }

  ngOnInit() {
  }

  send() {
 //   console.log(this.form.value);
// console.log(this.form.value);
console.log('hola')
//  if (
//   this.mensaje.nombre!= '' &&
//   this.mensaje.email!= '' &&
//   this.mensaje.mensaje!= '' 
// ) {
  swal("Mensaje enviado!", "Pronto nos comunicaremos con vos.", "success");
//   this.errorForm = false;
// //  this.mensajes.push(this.mensaje)
//   this.mensaje = {
//     id: '',
//     nombre: '',
//     email: '',
//     telefono: '',
//     mensaje: ''
//   }
// } else {
//   this.errorForm = true;
//   setTimeout(() => {
//     this.errorForm = false
//   }, 1500);
//}
  }

}
