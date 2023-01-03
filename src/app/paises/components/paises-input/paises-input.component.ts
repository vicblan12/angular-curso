import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-paises-input',
  templateUrl: './paises-input.component.html',
  styles: [
  ]
})
export class PaisesInputComponent implements OnInit{
 

  @Input() placeholder: string = '';

 @Output() onEnter: EventEmitter<string> = new EventEmitter(); // El evento onEnter es del tipo EventEmitter y de tipo string para emitir el termino qu arroja el input

 @Output() onDebounce: EventEmitter<string> = new EventEmitter();

 dbouncer: Subject<string> = new Subject();

 termino: string = '';

 ngOnInit(): void {

  this.dbouncer
  .pipe(
    debounceTime(300) //Esta parte hace que demore 300 ms en obtener lo que see esta escribiendo (Esto para no saturar de peticiones)
  )
  .subscribe( valor => {
    this.onDebounce.emit( valor ) //Emitimos en el evento onDebounce
  } )
}

 buscar() {

  this.onEnter.emit( this.termino ); //Aqui le pasamos la variable que va a emitir

}

teclaPresionada() {

  this.dbouncer.next( this.termino )

}

}
