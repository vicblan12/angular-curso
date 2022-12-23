import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DbzModule } from './dbz/dbz.module';
import { AppComponent } from './app.component';
import { contadorModule } from './contador/contador.module';
import { heroesModule } from './heroes/heroes.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    heroesModule,
    contadorModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
