import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { dbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {

  //@Input() personaje: Personaje[] = []; //Aqui recibimos el array del componente padre para poder mostrarlo en pantalla

  get personaje() {
    return this.dbzService.personajes;
  }

  constructor( private dbzService: dbzService) {}

}
