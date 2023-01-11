import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {

  activateMayusc: boolean = true;

  orderBy: string = '';

  heroes: Heroe[] = [
    {
    nombre: 'Superman',
    vuela: true,
    color: Color.azul
  },
  {
    nombre: 'Batman',
    vuela: false,
    color: Color.negro
  },
  {
    nombre: 'Robin',
    vuela: false,
    color: Color.verde
  },
  {
    nombre: 'Daredevil',
    vuela: false,
    color: Color.rojo
  },
  {
    nombre: 'Linterna Verde',
    vuela: true,
    color: Color.verde
  }

];

  cambiarMayus() {

    this.activateMayusc = !this.activateMayusc; // Va a ser igual al opuesto del valor. Que geniooo

  }

  cambiarOrden( valor:string ) {

    this.orderBy = valor;

  }

}
