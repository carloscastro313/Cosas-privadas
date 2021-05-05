import { Component, OnInit } from '@angular/core';
import { validateEventsArray } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-alta-actores',
  templateUrl: './alta-actores.component.html',
  styleUrls: ['./alta-actores.component.css']
})
export class AltaActoresComponent implements OnInit {

  public forma : FormGroup;
  
  constructor(private fb:FormBuilder,private storage:StoreService) { }

  ngOnInit(): void {
    this.forma = this.fb.group({
      'nombre':['',Validators.required],
      'apellido':['',Validators.required],
      'edad': ['',[Validators.required,Validators.min(18),Validators.max(99)]],
      'correo':['',[Validators.required,Validators.email]],
      'pais':['',Validators.required],
  })
}

  seleccion(value){
    // console.log(value);
    this.forma.get('pais').setValue(value);
  }
  
  public aceptar():void
  {
    if(this.forma.valid)
    {
      this.storage.setDoc("Actores",this.forma.value);
      console.log(this.forma.value);
      this.forma.reset();
      window.alert("Encuesta enviada correctamente, gracias por participar!");
    }
    else{
      window.alert("Por favor, complete correctamente los campos antes de enviar el formulario.");
    }
  }
}
