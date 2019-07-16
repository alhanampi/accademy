import { Component, OnInit } from '@angular/core';
import { ProductosService, productos, producto } from '../../services/productos.service'//importar servicio

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  listado: string[] = [];
  datosProductosPost: producto;
  productoIDSTR: string = '/productos/6';

  constructor(private productosService: ProductosService) {

    this.datosProductosPost = productosService.datosProducto //datos producto viene del servicio
    
  }

  ngOnInit() {
    this.getProducts()
  }

  //get:
  getProducts() {
    this.productosService.getProd()
      .subscribe( (prods : productos) => { 
        console.log('getProducts: ' + prods.data)
        this.listado = prods.data
      })
  }

    //ver productos individuales:
     verProducto(id: number) {

    this.productosService.prodCode = id 
       }


}
