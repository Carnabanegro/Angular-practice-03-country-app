import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/countrys.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-regiones',
  templateUrl: './regiones.component.html',
  styleUrls: ['./regiones.component.scss']
})
export class RegionesComponent implements OnInit {

  regiones : string[] = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  input : string = '';
  error : boolean = false;
  paises: Country[] = [];

 
  buscar(termino : string){

    this.input = termino;
    this.error = false;

    this.paisService.buscarPorRegion(this.input)
    .subscribe({
      next: (resp:any)=>{
        this.paises = resp 
      }, 
      error: () =>this.error = true
    })
  } 

  sugerencias(termino:string){
    this.error = false;
  }

  constructor(private paisService: PaisService){}

  ngOnInit(): void {
  }

}
