import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

export interface mensaje {
  id: any,
  nombre: string,
  email: string,
  telefono: string,
  mensaje: string
}

export interface mensajes {
  data: string[]
 }
//necesito una interfaz mensajes?

@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  envioMensaje: mensaje = {
    id: '',
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  }
  
  constructor( private http: HttpClient) { }

  private baseUrl : string = environment.production? '' : 'http://localhost:8080';

  postMensaje(data: mensaje) {
    const httpOptions = {
      headers : new HttpHeaders({
        'content-type': 'application/json'
      })
    }
    return this.http.post<mensaje>(this.baseUrl + '/mensaje', data, httpOptions );
}

}
