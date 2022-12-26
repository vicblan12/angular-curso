import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interfaces/response.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey:string = 'M0jnRSvP931puyPytuUXuuF2v2I8eubz';
  private url:string = 'https://api.giphy.com/v1/gifs';
  private _history: string[] = [];

  public resultados: Gif[] = [];

  get history() {

    return [...this._history]; //Colocamos el ... para eliminar las referencias con el _history original por si hay cambios;

  }

  constructor(private http: HttpClient) {

      this._history =  JSON.parse( localStorage.getItem('historial')! ) || [] ; //El ! nos quita el error de string o null || JSON.parse es lo contrario de stringify, nos devuelve una cadena a su estado original

      this.resultados = JSON.parse( localStorage.getItem('resultados')! ) || [] ;

  }

  buscarGifs( query: string ) {
   
    query = query.trim().toLocaleUpperCase(); //trim para limpiar los espacios y to Uper para convertir a mayusculas

    if( !this._history.includes( query ) ) { //Al preguntar include da true si incluye y false si no, por eso colocamos el ! para insertar si no lo incluye

      this._history.unshift( query ); //Insertar en el arreglo

      this._history = this._history.splice(0,10); //Esto para solo traer los 10 primeros

      localStorage.setItem('historial', JSON.stringify( this._history )); //Esta propiedad JSON.stringify convierte un objeto en una linea de texto o string

    }

    const params = new HttpParams()
                  .set('api_key', this.apiKey)
                  .set('limit', '12')
                  .set('q', query); // Estos son los parametros que se pasan por el get

    this.http.get<SearchGifsResponse>(`${ this.url }/search`, { params }) // Es la url pero usando las constantes para que se vea mas limpio
    .subscribe( ( resp ) => {

      this.resultados = resp.data;

      localStorage.setItem('resultados', JSON.stringify( this.resultados ))

    } )

  }

}
