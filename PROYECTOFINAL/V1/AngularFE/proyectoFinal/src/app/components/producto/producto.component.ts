import { Component, OnInit } from '@angular/core';
import { ProductosService, productos, producto } from '../../services/productos.service'//importar servicio

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.sass']
})
export class ProductoComponent implements OnInit {

  //listado: string[] = []; //listado no es necesario
  datosProductosPost: producto;

  constructor(private productosService: ProductosService) {
    this.datosProductosPost = productosService.datosProducto.id //sumé este id y cambié abajo el tipo a any
   }

  ngOnInit() {
    this.getUnProd(this.datosProductosPost); // console.log no da data
    console.log(this.datosProductosPost)
  }

      //ver productos individuales:
      getUnProd(id: any) {
        this.productosService.getUnProd(id)
        .subscribe( (prods : productos) => { 
          console.log('hola', prods.data[0]) //me da la posicion 0 de la db
     //     this.datosProductosPost = prods.data[0];
            //this.datosProductosPost 
        })
      } 

}
