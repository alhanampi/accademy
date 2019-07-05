import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { EntradasComponent } from './componentes/entradas/entradas.component';
import { AtributosComponent } from './componentes/atributos/atributos.component';
import { FormulariosComponent } from './componentes/formularios/formularios.component';
import { EstructurasComponent } from './componentes/estructuras/estructuras.component';

@NgModule({
  declarations: [
    AppComponent,
    EntradasComponent,
    AtributosComponent,
    FormulariosComponent,
    EstructurasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
