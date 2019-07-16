import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

login() {
  console.log('user se quiso loguear')
}

register() {
  console.log('usuario se quiso registrar')
}

}
