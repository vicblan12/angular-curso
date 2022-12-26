import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(private gifsService: GifsService ) {} //Iniciamos el servicio en el constructor para poder acceder a el

  get history() {

    return this.gifsService.history;

  }

  buscar( termino:string ) {

    this.gifsService.buscarGifs( termino ); //Esto va cambiar el ultimo resultado del servicio por el que le dimos click en el sidebar

  }

}
