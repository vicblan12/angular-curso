import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent {

  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>; /*El decorador ViewChild va a buscar en el html el elemento txtBuscar y no los asigna a la variable que colocamos siguiente
  El ! es para decirle a typescript que nos aseguramos de que el elemento no va a ser nulo
  El generico es de tipo <HTMLInputElement> ponemos esto para obtener la autoayuda correspondiente a este elemento (value, focus, etc)
  */

  constructor( private gifsService: GifsService ) {}

  buscar() { //El evento KeyboardEvent lo trae por defecto al usar eventos en el html. Por eso no declaro esa interfaz
    const valor = this.txtBuscar.nativeElement.value

    if(valor.trim().length === 0){
      return;
    }

    this.gifsService.buscarGifs( valor );

    this.txtBuscar.nativeElement.value = ''; //Seteamos el valor en la caja de texto
  }

}
