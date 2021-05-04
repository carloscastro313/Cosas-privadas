import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidosComponent } from './page/bienvenidos/bienvenidos.component';
import { BusquedaspeliculasComponent } from './page/busquedaspeliculas/busquedaspeliculas.component';
import { TablaPeliculaComponent } from './componentes/tabla-pelicula/tabla-pelicula.component';
import { DetallePeliculaComponent } from './componentes/detalle-pelicula/detalle-pelicula.component';
import { HttpClientModule } from '@angular/common/http';
import { AltaActoresComponent } from './page/alta-actores/alta-actores.component';
import { AngularFireModule } from '@angular/fire';
import { TablaPaisesComponent } from './componentes/tabla-paises/tabla-paises.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidosComponent,
    BusquedaspeliculasComponent,
    TablaPeliculaComponent,
    DetallePeliculaComponent,
    AltaActoresComponent,
    TablaPaisesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(
      {
        apiKey: "AIzaSyA6H033lx8EkpbOwzpjRH_FGGAa60sXhhE",
        authDomain: "utn-parcial.firebaseapp.com",
        databaseURL: "https://utn-parcial.firebaseio.com",
        projectId: "utn-parcial",
        storageBucket: "utn-parcial.appspot.com",
        messagingSenderId: "916622488349",
        appId: "1:916622488349:web:958d1b1412390324c3a7f4",
        measurementId: "G-C68SRXG8LZ"
      }
    )
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
