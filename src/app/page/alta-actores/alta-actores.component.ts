import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alta-actores',
  templateUrl: './alta-actores.component.html',
  styleUrls: ['./alta-actores.component.css']
})
export class AltaActoresComponent implements OnInit {

  pais: string;

  constructor() { }

  ngOnInit(): void {
  }

  seleccion(value){
    console.log(value);
    this.pais = value;
  }

}
