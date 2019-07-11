import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { Routes,RouterModule } from '@angular/router' //importar modulos de ruteo
import { HttpClientModule } from '@angular/common/http' //importar módulo de conexión http

import { AppComponent } from './app.component';
import { EntradasComponent } from './componentes/entradas/entradas.component';
import { EstructurasComponent } from './componentes/estructuras/estructuras.component';
import { AtributosComponent } from './componentes/atributos/atributos.component';
import { FormulariosComponent } from './componentes/formularios/formularios.component';

const routes: Routes = [ //crear rutas
  {path: '', redirectTo: 'entradas', pathMatch:'full'},
  {path: 'entradas', component: EntradasComponent},
  {path: 'estructuras', component: EstructurasComponent},
  {path: 'atributos', component: AtributosComponent},
  {path: 'formularios', component: FormulariosComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    EntradasComponent,
    EstructurasComponent,
    AtributosComponent,
    FormulariosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot( //importar modulo y rutas
      routes, {
        enableTracing:!true //para poder debugear en consola. Se pone en false para deshabilitar
      }
    ),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
