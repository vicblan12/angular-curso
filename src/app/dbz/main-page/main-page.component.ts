import { Component } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';
import { dbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent  {

  // agregar( event: any ) {
  //   event.preventDefault(); //Se coloca asi para previr el comportamiento por default del submit
  //   console.log(event)
  // }

 

nuevo: Personaje = {
  nombre: '',
  poder: 0
}

// get personaje():Personaje[] {
//   return this.dbzService.personaje; /**Obtener los personajes del servicio con un geter */
// }


/* Para importar un servicio en el constructor de la clase. Ponemos private o public, el nombre y el tipo */
  constructor() {

  }

}
