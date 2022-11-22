import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core'
import { heroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

//Exportar para hacerlo accesible desde otros archivos (el modulo se debe llamar como el archivo)
@NgModule({
    //En declaración van los componentes que forman parte del modulo
    declarations: [
        heroeComponent,
        ListadoComponent
    ],
    //Aqui van los componentes o cosas que quiero hacer publicas y accesibles
    exports: [
        ListadoComponent
    ],
    //Aqui van solo modulos a importar
    imports: [
        CommonModule
    ]


})
export class heroesModule {

} 