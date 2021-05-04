import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BienvenidosComponent } from './page/bienvenidos/bienvenidos.component';
import { BusquedaspeliculasComponent } from './page/busquedaspeliculas/busquedaspeliculas.component';
import { AltaActoresComponent } from './page/alta-actores/alta-actores.component';

const routes: Routes = [
  {
    path: 'bienvenido',
    component: BienvenidosComponent,
  },
  {
    path: 'busqueda',
    component: BusquedaspeliculasComponent
  },
  {
    path: 'AltaActores',
    component: AltaActoresComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'bienvenido'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
