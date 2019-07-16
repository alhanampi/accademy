import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ProductoComponent } from './components/producto/producto.component';
import { ProductosComponent } from './components/productos/productos.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'productos/:id', component: ProductoComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'cart', component: CartComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    ContactoComponent,
    ProductoComponent,
    ProductosComponent,
    AboutComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot (
      routes, {
        enableTracing: !true 
      }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
