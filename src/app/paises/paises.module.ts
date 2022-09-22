import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalesComponent } from './pages/capitales/capitales.component';
import { PaisesComponent } from './pages/paises/paises.component';
import { RegionesComponent } from './pages/regiones/regiones.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TableComponent } from './components/table/table.component';
import { SearcherComponent } from './components/searcher/searcher.component';
import { AlertComponent } from './components/alert/alert.component';
import { SelectComponent } from './components/select/select.component';



@NgModule({
  declarations: [
    CapitalesComponent,
    PaisesComponent,
    RegionesComponent,
    VerPaisComponent,
    TableComponent,
    SearcherComponent,
    AlertComponent,
    SelectComponent,
  ],
  exports: [
    CapitalesComponent,
    PaisesComponent,
    RegionesComponent,
    VerPaisComponent,
    SelectComponent,
    SearcherComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class PaisesModule { }
