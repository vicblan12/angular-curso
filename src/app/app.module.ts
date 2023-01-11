import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouterModule } from './app-router.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

//Cambiar el locale(idioma) de la app
import localEs from "@angular/common/locales/es-VE";
import { registerLocaleData } from "@angular/common";
registerLocaleData( localEs );

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    VentasModule
    
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-VE' } //Esto para establecer el idioma de Manera Global
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
