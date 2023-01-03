import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from "rxjs/operators";
import { NombrePaises } from '../../interfaces/nombrePais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit{

  pais!: NombrePaises; //Le decimos a typescript que el valor puede ser nulo con ese signo y no le asignamos ningun valor

  constructor( private activatedRoute: ActivatedRoute, 
               private paisService:PaisService ) {}

  ngOnInit(): void { //Lo colocamos en el ngOnInit ya que esto se ejecuta luego de que el componente haya sido inicializado
      
    // this.activatedRoute.params // Nos subscribimos al servicio activatedRoute propio de Angular, que nos genera un observable de las rutas y sus params
    // .subscribe( ({ id }) => { //Aplicamos desestructuración de la variable

    //   this.paisService.buscarCodigo( id )
    //     .subscribe(resp => {

    //       console.log(resp);

    //     }, (err) => {

    //       console.log(err);

    //     })

    // } )

    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.paisService.buscarCodigo( id ) ), //Este operador de rxjs recibe un parametro, en este caso el id y devuelve un observable en este caso del servicio
        tap( console.log ) // Forma corta de imprimir en consola con operador de rxjs
      )
      .subscribe(resp => this.pais = resp[0]) 

  }

}
