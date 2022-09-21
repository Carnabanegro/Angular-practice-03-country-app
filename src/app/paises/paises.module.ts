import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalesComponent } from './pages/capitales/capitales.component';
import { PaisesComponent } from './pages/paises/paises.component';
import { RegionesComponent } from './pages/regiones/regiones.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TableComponent } from './components/table/table.component';
import { SearcherComponent } from './components/searcher/searcher.component';
import { AlertComponent } from './components/alert/alert.component';



@NgModule({
  declarations: [
    CapitalesComponent,
    PaisesComponent,
    RegionesComponent,
    VerPaisComponent,
    TableComponent,
    SearcherComponent,
    AlertComponent,
  ],
  exports: [
    CapitalesComponent,
    PaisesComponent,
    RegionesComponent,
    VerPaisComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class PaisesModule { }
