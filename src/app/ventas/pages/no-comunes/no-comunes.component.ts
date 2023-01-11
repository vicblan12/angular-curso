import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //i18nSelect
  nombre: string = 'Victor';

  genero: string = 'masculino'

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nPlurarl

  clientes : string[] = ['Maria', 'Juan', 'Jose', 'Pedro', 'Armando', 'Josefa'];
  clientesMap = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos 1 cliente esperando',
    'other': 'tenemos # clientes esperando' //El numeral hace referencia al cliente.length que le pasamos al pipe, por eso imprime el numero

  }

  cambiarNombre() {

    if(this.nombre === 'Victor'){

    this.nombre = 'Maria';

    this.genero = 'femenino'

  }else {

    this.nombre = 'Victor';

    this.genero = 'masculino';

  }

  }

  eliminarNombre() {

    // this.clientes = this.clientes.splice(0, this.clientes.length - 1);

    this.clientes.pop(); //Para eliminar el último elemento de un arreglo

  }

  //Key Value Pipe

  persona = {
    nombre: 'Victor',
    edad: 35,
    direccion: 'Caracas, Venezuela'
  }

  heroe = [
    {
      nombre: 'batman',
      vuela: false
    },
    {
      nombre: 'superman',
      vuela: true
    }
  ]

  //Async Pipe

  miObservable = interval(1000); //0,1,2,3,4,5,6,7,8,9,10

  valorPromesa = new Promise( (resolve,reject) => {

    setTimeout(() => {
      resolve( 'Tenemos data de promesa' );
    }, 3500)

    });

  

}
