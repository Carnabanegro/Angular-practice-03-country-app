import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/countrys.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-capitales',
  templateUrl: './capitales.component.html',
  styleUrls: ['./capitales.component.scss']
})
export class CapitalesComponent implements OnInit {


  input : string = '';
  error : boolean = false;
  paises: Country[] = [];

  
  buscar(termino : string){

    this.input = termino;
    this.error = false;

    this.paisService.buscarPorCapital(this.input)
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
