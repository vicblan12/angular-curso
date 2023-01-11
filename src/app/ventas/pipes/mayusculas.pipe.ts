import { Pipe, PipeTransform } from "@angular/core";
import { Validators } from "@angular/forms";

@Pipe({
    name: 'mayusculas' //Aqui definimos el nombre del pipe
})
export class MayusculasPipe implements PipeTransform {

    transform( termino:string, Mayusc: boolean = true ):string { //Aqui recibimos el argumento que vamos a transformar. Lo que salga es lo que vamos a mostrar

        // if(Mayusc){

        // return termino.toUpperCase();
        
        // }else {

        //     return termino.toLowerCase();

        // }

        return ( Mayusc ) ? termino.toUpperCase() : termino.toLowerCase();

    }

}