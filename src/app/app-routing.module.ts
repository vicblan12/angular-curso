import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


//Importaciones

import { PorPaisComponent } from "./paises/pages/por-pais/por-pais.component";
import { PorRegionComponent } from "./paises/pages/por-region/por-region.component";
import { PorCapitalComponent } from "./paises/pages/por-capital/por-capital.component";
import { VerPaisComponent } from "./paises/pages/ver-pais/ver-pais.component";

const routes: Routes = [
    {
        
        path: '',
        component: PorPaisComponent,
        pathMatch: 'full'

    },
    {
        
        path: 'region',
        component: PorRegionComponent
    
    },
    {
        
        path: 'capital',
        component: PorCapitalComponent
    
    },
    {
        
        path: 'pais/:id',
        component: VerPaisComponent
    
    },
    {
        
        path: '**',
        redirectTo: ''
    
    }

    
];

@NgModule({
    imports:[
        RouterModule.forRoot( routes ) //Aqui van las rutas que defini mas arribita
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}