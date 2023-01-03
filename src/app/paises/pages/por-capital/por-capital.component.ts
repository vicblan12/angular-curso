import { Component } from '@angular/core';
import { NombrePaises } from '../../interfaces/nombrePais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

termino: string = '';

hayError: boolean = false;

paises: NombrePaises[] = [];

constructor( private paisService: PaisService ) {}

  buscar( termino: string ) {

    this.paisService.buscarCapital( termino )
    .subscribe( resp => {

      this.paises = resp;

    }, (err) => {

      this.hayError = true;
      this.paises = [];

    } )

  }

  sugerencias( termino:string ) {
      
    this.hayError = false;

  }

}
