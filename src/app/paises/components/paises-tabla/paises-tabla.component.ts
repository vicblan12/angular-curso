import { Component, Input } from '@angular/core';
import { NombrePaises } from '../../interfaces/nombrePais.interface';

@Component({
  selector: 'app-paises-tabla',
  templateUrl: './paises-tabla.component.html',
  styles: [
  ]
})
export class PaisesTablaComponent {


@Input() paises: NombrePaises[] = [];


}
