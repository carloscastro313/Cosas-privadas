import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BienvenidosComponent } from './page/bienvenidos/bienvenidos.component';
import { BusquedaspeliculasComponent } from './page/busquedaspeliculas/busquedaspeliculas.component';

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
