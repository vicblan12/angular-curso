import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable, tap } from 'rxjs';
import { NombrePaises } from '../interfaces/nombrePais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  


  private apiUrl: string = 'https://restcountries.com/v3.1';

  get httpParams() {
    
    return new HttpParams()
    .set('fields', 'name,capital,cca2,flags,population'); //Aqui se puede declarar como una constante

  }

  constructor( private http: HttpClient ) { }

  buscarPais( termino: string ): Observable<NombrePaises[]> {

    const url = `${ this.apiUrl }/name/${ termino }`; 

    return this.http.get<NombrePaises[]>( url, { params: this.httpParams } );

  }

  buscarCapital( termino:string ) : Observable<NombrePaises[]> {

    const url = `${ this.apiUrl }/capital/${ termino }`; 

    return this.http.get<NombrePaises[]>( url, { params: this.httpParams } ); //en params llamamos el geter

  }

  buscarRegion( termino:string ) : Observable<NombrePaises[]> {

    const url = `${ this.apiUrl }/region/${ termino }`; 

    return this.http.get<NombrePaises[]>( url, { params: this.httpParams } );

  }

  buscarCodigo( termino:string ) : Observable<NombrePaises[]> {

    const url = `${ this.apiUrl }/alpha/${ termino }`; 

    return this.http.get<NombrePaises[]>( url );

  }

}
