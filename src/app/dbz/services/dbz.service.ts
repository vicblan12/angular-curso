import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class dbzService {

    private _personaje: Personaje[] = [
        {
        nombre: 'Goku',
        poder: 15000
      },
      {
        nombre: 'Vegeta',
        poder: 8000
      }
    ];

    get personajes(): Personaje[] {
        return [...this._personaje]; /**Se coloca entre llaves para indicar que es un arreglo y los primeros 3 puntos para romper la referencia a la clase privada. Para mas seguridad */
    }

    constructor() {}
    
    agregarPersonaje( result: Personaje ) {
        this._personaje.push( result ); /**En el this._personaje estoy haciendo referencia a la propiedad privada del servicio personaje (NO AL GETER OJO) */
    }

}