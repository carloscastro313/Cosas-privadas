export class Pelicula{
  id: number;
  nombre: string;
  tipo: 'terror' | 'comedia' | 'amor' | 'otros';
  fechaEstreno: string;
  cantPublico: number;
  foto: string;

  constructor(id, nombre, tipo, fecha, publico, foto){
    this.id = id;
    this.nombre = nombre;
    this.fechaEstreno = fecha;
    this.cantPublico = publico;
    this.foto = foto;

    if(tipo == ("terror" || "comedia" || "amor")){
      this.tipo = tipo;
    }else{
      this.tipo = "otros";
    }
  }
}
