import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
  
  alumnos2 : object[] = [
    {nombre: 'Pepe', apellido: 'Lopez', edad: 34, curso: true, foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-256.png'},
    {nombre: 'María', apellido: 'Gimenez', edad: 45, curso: !true, foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/1_avatar-256.png'},
    {nombre: 'Juan', apellido: 'Sanchez', edad: 29, curso: !true, foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/11_avatar-256.png'},
    {nombre: 'Lucas', apellido: 'Picos', edad: 26, curso: true, foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/9_avatar-256.png'}
  ]

  constructor(public http: HttpClient) {
    this.http.get('https://jsonplaceholder.typicode.com/posts') //hago get del placeholder
    .subscribe(datos => console.log(datos)) //suscribo para recibir esa data
   }
}

