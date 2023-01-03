import { Component } from '@angular/core';
import { NombrePaises } from '../../interfaces/nombrePais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent {

  

  termino: string = '';

  hayError: boolean = false;

  paises: NombrePaises[] = [];

  regiones : string[] = [ 'africa', 'america', 'asia', 'europe', 'oceania' ];

  regionActiva: string = '';

  constructor( private paisService: PaisService ) {}

  sugerencias( termino:string ) {

    this.hayError = false;

  }

  getClaseCSS( region:string ): string {

    return (region === this.regionActiva) ? 'btn btn-primary me-1': 'btn btn-outline-primary me-1'; //Evalua que clase colocar

  }

  activarRegion( region:string ) {

    if(region === this.regionActiva) { return } //Si son los mismos para que no lo vuelva a cargar

    this.regionActiva = region;

    this.paises = [];

    this.paisService.buscarRegion( region )
    .subscribe( resp => {

      this.paises = resp;

    }, (err) => {

      this.hayError = true;

      this.paises = [];

    } )

  }

}
