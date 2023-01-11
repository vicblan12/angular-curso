import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/ventas.interface';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform( heroe: Heroe[], orderBy: string = 'sin valor'): Heroe[] { //Este es el valor que cambia con los botones

    switch( orderBy ) {

      case 'nombre':
        return heroe.sort((a,b) => ( a.nombre > b.nombre ) ? 1 : -1 );

      case 'vuela':
        return heroe.sort((a,b) => ( a.vuela > b.vuela ) ? -1 : 1 ); //Aqui se coloca al reves porque los booleanos funcionan al contrario, y entonces ordena por false

      case 'color':
        return heroe.sort((a,b) => ( a.color > b.color ) ? 1 : -1 );
      
      default:
          return heroe;

    }

    // if(orderBy == 'sin valor'){

    //   return heroe;

    // }else {
    
    // return heroe.sort((a,b) => ( a.nombre > b.nombre ) ? 1 : -1 ); //funcion para ordenar de javascript

    // }

  }

}
