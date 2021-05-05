import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-pelicula-alta',
  templateUrl: './pelicula-alta.component.html',
  styleUrls: ['./pelicula-alta.component.css']
})
export class PeliculaAltaComponent implements OnInit {

  public forma : FormGroup;

  constructor(private fb:FormBuilder,private storage:StoreService) { }

  ngOnInit(): void {
    this.forma = this.fb.group({
      'nombre':['',Validators.required],
      'fecha':['',Validators.required],
      'descripcion': ['',Validators.required],
      'publico':['',Validators.required],
      'tipo':['',Validators.required],
      'imagen':['',[Validators.required,Validators.email]],
      'actor':['',Validators.required],
  })
}

  seleccion(value){
    // console.log(value);
    this.forma.get('pais').setValue(value);
  }

  public async aceptar():Promise<void>
  {
    if(this.forma.valid)
    {

    }
    else{
      window.alert("Por favor, complete correctamente los campos antes de enviar el formulario.");
    }
  }
}
