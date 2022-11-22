import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  delHeroe: string[] = [];

  borrarHeroe(): void{
    this.delHeroe = this.heroes.splice(0,1) || ''
  }

}
