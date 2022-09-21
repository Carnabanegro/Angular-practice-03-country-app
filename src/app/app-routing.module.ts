import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { PaisesComponent } from './paises/pages/paises/paises.component';
import { RegionesComponent } from './paises/pages/regiones/regiones.component';
import { CapitalesComponent } from './paises/pages/capitales/capitales.component';
import { VerPaisComponent } from './paises/pages/ver-pais/ver-pais.component';


const routes : Routes = [
        {path:'' , component: PaisesComponent, pathMatch: "full"},
        {path:'paises',component: PaisesComponent},
        {path:'regiones',component: RegionesComponent},
        {path:'capitales',component: CapitalesComponent},
        {path:'paises/:id',component: VerPaisComponent},
        {path: '**', redirectTo: ''}
]

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})

export class AppRoutingModule{}