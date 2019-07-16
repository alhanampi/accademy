import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

export interface usuario {
  id: any,
  nombre: string,
  password: string;
}

export interface usuarios {
  data: string[]
 }
//necesito una interfaz mensajes?

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  logUser: usuario = {
    id: '',
    nombre: '',
    password: ''
  }
  
  constructor( private http: HttpClient) { }

  private baseUrl : string = environment.production? '' : 'http://localhost:8080';

  getUsuario(data: usuario) {
    const httpOptions = {
      headers : new HttpHeaders({
        'content-type': 'application/json'
      })
    }
  //  return this.http.post<usuario>(this.baseUrl + '/mensaje', data, httpOptions );
}

}
