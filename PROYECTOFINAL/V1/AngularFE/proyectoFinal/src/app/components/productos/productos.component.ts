import { Component, OnInit } from '@angular/core';
import { ProductosService, productos, producto } from '../../services/productos.service'//importar servicio

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.sass']
})
export class ProductosComponent implements OnInit {

  listaProd: string[] = [];
  datosProductosPost: producto;

  constructor(private productosService: ProductosService) {
    this.datosProductosPost = this.productosService.datosProducto //datos producto viene del servicio
  }

  ngOnInit() {
  }

  //get:
  getProducts() {
    this.productosService.getProd()
      .subscribe( (prods : productos) => { //por qué marca error?
        console.log('getProducts: ' + prods.data)
        this.listaProd = prods.data
      })
  }

  //verificar data, pasarlo a saveProd:
/* necesito esto?
  checkDataProd() {
    if (this.datosProductosPost.item != '' && this.datosProductosPost.precio != '' && this.datosProductosPost.descripcion != '' && this.datosProductosPost.foto != '')
      return true;
    else
      return false;
  }*/


}
