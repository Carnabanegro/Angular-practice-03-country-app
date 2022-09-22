import { Component} from '@angular/core';
import { Country } from '../../interfaces/countrys.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.scss']
})

export class PaisesComponent{

  input : string = '';
  error : boolean = false;
  paises: Country[] = [];
  sugeridos: Country[] = [];

 
  buscar(termino : string){

    this.input = termino;
    this.error = false;

    this.paisService.buscarPaises(this.input)
    .subscribe({
      next: (resp:any)=>{
        this.paises = resp 
      }, 
      error: () =>this.error = true
    })
  } 

  sugerencias(termino:string){
    this.error = false;

    this.paisService.buscarPaises(termino)
      .subscribe({
        next: (resp:any) =>{this.sugeridos = resp.splice(0,3)},
        error: () => this.sugeridos = []
      })
  }

  constructor(private paisService: PaisService){}
}
