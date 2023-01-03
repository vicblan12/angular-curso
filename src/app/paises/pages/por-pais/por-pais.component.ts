import { Component } from '@angular/core';
import { NombrePaises } from '../../interfaces/nombrePais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [`
          li {
            cursor: pointer;
          }
  ` ]
  
})
export class PorPaisComponent {

  termino: string = '';

  hayError: boolean = false;

  paises: NombrePaises[] = []

  paisSugerido: NombrePaises[] = [];

  hideSugerencia: boolean = false;

  constructor(private paisService: PaisService) {}

  buscar( termino:string ) {
    this.hideSugerencia = false;
    this.hayError = false;
    this.termino = termino;
    
    this.paisService.buscarPais( this.termino )
      .subscribe( (resp) => {
        
        this.paises = resp;
        
      }, (err) => {
        
        this.hayError = true;
        this.paises = [];

      } );

  }

  sugerencias( termino:string ) {
    
    this.hayError = false;

    this.termino = termino;

    this.hideSugerencia = true;

    this.paisService.buscarPais( termino )
    .subscribe( resp => this.paisSugerido = resp.splice(0,5),
    (err) => this.paisSugerido = [] ) //Hacemos splice para que el arreglo solo traiga 5


  }

}
