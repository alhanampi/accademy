import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { environment } from '../../environments/environment';

//interfaces:
export interface producto {
  item: string;
  precio: any; //me conviene que sea any, number o string?
  descripcion: string;
  foto: string;
}

export interface productos {//data va a venir de node
  data: string[]
 }

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  datosProducto: producto = {
    item: '',
    precio: '',
    descripcion: '',
    foto: ''
  }

  constructor( private http: HttpClient) {} //inyeccion http para usar en node

  private enviroUrl: string = environment.production? '' : 'http://localhost:8080'; //conexion a node

  //get:
  getProd() {
    return this.http.get<productos>(this.enviroUrl + '/productos'); //todos los productos
  }

  //post:
  postProd(data: producto) {
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json'
      })
    } 
    return this.http.post<producto>(this.enviroUrl + '/productos', data, httpOptions);
  }

  //put:
  putProd(i, data: producto) {
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json'
      })
    } 
    return this.http.put<producto>(this.enviroUrl + '/productos' + i, data, httpOptions);
  }

  //delete:
  deleteProd(i) {
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json'
      })
    } 
    return this.http.delete<producto>(this.enviroUrl + '/productos' + i, httpOptions);
  }

}
