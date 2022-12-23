import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { dbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent  {

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }
  
 // @Output() onNewPerson: EventEmitter<Personaje> = new EventEmitter(); //Personaje es la interfaz. Es decir lo que vamos a emitir es de tipo personaje
  
  constructor( private dbzService: dbzService ) {}

  agregar() {
   if (this.nuevo.nombre.trim().length === 0){
  return;
   }

    //this.onNewPerson.emit(this.nuevo); //this.nuevo es de tipo personaje y es el personaje que vamos a emitir

    this.dbzService.agregarPersonaje( this.nuevo )
    
    this.nuevo = {
      nombre: '',
      poder: 0
    }
  } 

  
  
}
