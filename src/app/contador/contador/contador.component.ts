import { Component } from '@angular/core'

@Component({
    selector: 'app-contador',
    template: `
            <h1>{{ titulo }}</h1>
        <h3>La base es: <strong> {{ base }} </strong></h3>

        <!-- Los eventos de javascript se identifican en parentesis -->

        <button (click)=" acumular( + base ) " > + {{base}} </button>

        <span> {{ numero }} </span>

        <button (click)=" acumular(- base ) " > - {{base}}</button>
    `
})

export class contadorComponent {
    public titulo: string = 'Contador App';

    numero: number = 0;
  
    base: number = 5;
  
      //Se coloca this para indicar que es el numero de la clase
  
      acumular( valor: number ):void {
        this.numero += valor;
      }
  
}