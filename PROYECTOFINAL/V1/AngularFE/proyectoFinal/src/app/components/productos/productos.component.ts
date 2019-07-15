import { Component, OnInit } from '@angular/core';
import { ProductosService, productos, producto } from '../../services/productos.service'//importar servicio

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.sass']
})
export class ProductosComponent implements OnInit {

  listado: string[] = [];
  datosProductosPost: producto;

  constructor(private productosService: ProductosService) {
    this.datosProductosPost = productosService.datosProducto //datos producto viene del servicio
  }

  ngOnInit() {
    this.getProducts()
  }

  //get:
  getProducts() {
    this.productosService.getProd()
      .subscribe( (prods : productos) => { //por qué marca error?
        console.log('getProducts: ' + prods.data)
        this.listado = prods.data
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
