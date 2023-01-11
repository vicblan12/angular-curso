import { Component, OnInit } from '@angular/core';

//Para la animación de burbuja del fieldset
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  constructor( private primengConfig: PrimeNGConfig ) {}

  ngOnInit(): void {
    
    this.primengConfig.ripple = true;

  }

}
