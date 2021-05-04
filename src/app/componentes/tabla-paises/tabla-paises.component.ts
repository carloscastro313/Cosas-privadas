import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit {

  pais: any;
  @Output() select = new EventEmitter<any>();
  constructor(private HttpClient: HttpClient) { }

  ngOnInit(): void {
    this.HttpClient.get('https://restcountries.eu/rest/v2/all').subscribe((data: []) => {
      this.pais = data.slice(0,3);
    })
  }
  seleccion(value: string){
    this.select.emit(value);
  }
}
