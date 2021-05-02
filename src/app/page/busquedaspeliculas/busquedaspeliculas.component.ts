import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../../class/peliculas';

@Component({
  selector: 'app-busquedaspeliculas',
  templateUrl: './busquedaspeliculas.component.html',
  styleUrls: ['./busquedaspeliculas.component.css']
})
export class BusquedaspeliculasComponent implements OnInit {

  id : number;
  peliculas: any;
  peliculaSeleccionada: Pelicula = null;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=899555eec473eb4482c9f5d3dcc83934').subscribe((data : any) => {
      this.peliculas = data.results;
    })
  }

  seleccionPelicula(value){
    this.http.get(`https://api.themoviedb.org/3/movie/${value}?api_key=899555eec473eb4482c9f5d3dcc83934`).subscribe(({id,genres,original_title,popularity,poster_path,release_date}: any) => {
      this.peliculaSeleccionada = new Pelicula(id,original_title,genres[0],release_date,popularity,'https://image.tmdb.org/t/p/w500'+poster_path);
    })
  }
}
