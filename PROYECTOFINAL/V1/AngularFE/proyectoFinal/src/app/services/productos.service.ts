import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { environment } from '../../environments/environment';

//interfaces:
export interface producto {
  id: any;
  item: any;
  precio: any; 
  descripcion: string;
  categoria: string;
  foto: string;
  peso: string;

}

export interface productos {//data va a venir de node
  data: string[]
 }

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  datosProducto: producto = {
    id: '',
    item: '',
    precio: '',
    descripcion: '',
    categoria: '',
    foto: '',
    peso: ''
  }
  

  constructor( private http: HttpClient) {} //inyeccion http para usar en node

  private enviroUrl: string = environment.production? '' : 'http://localhost:8080'; //conexion a node

  prodCode : number;

  //get:
  getProd() {
    return this.http.get<productos>(this.enviroUrl + '/productos'); //todos los productos
  }

  //get de uno solo:
  getUnProd(id) { //falla tanto di paso producto como si paso productos
    return this.http.get<producto>(this.enviroUrl + '/productos/' + id); 
  }

  //get test:

  getTest() { //sacar cuando funcione
    return this.http.get(this.enviroUrl + '/test/');
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
