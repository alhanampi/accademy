import { Component, OnInit } from '@angular/core';
import { ProductosService, productos, producto } from '../../services/productos.service'//importar servicio

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  datosProd: producto;

  constructor(private productosService: ProductosService) {
    this.datosProd = productosService.datosProducto.id 
   }

  ngOnInit() {
    this.verProducto(this.productosService.prodCode); 
    console.log(this.productosService.prodCode)
  }


      verProducto(id: any) {
        this.productosService.getUnProd(id)
        .subscribe( (prod : producto) => { 
          console.log(prod)
           this.datosProd = prod
        })
      } 

  comprar() {
    console.log('compraste un producto!')
  }
}
