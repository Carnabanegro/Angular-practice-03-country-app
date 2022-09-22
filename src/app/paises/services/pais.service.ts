import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../../environments/environment';
import { Country} from '../interfaces/countrys.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {


  constructor(private http : HttpClient) { }

  buscarPaises(termino: string) : Observable<Country[]>{

    const query : string = `${environment.url}/name/${termino}` ;

    return this.http.get<Country[]>(query);
    


  }

  buscarPorCapital(termino: string) : Observable<Country[]>{

    const query : string = `${environment.url}/capital/${termino}` ;

    return this.http.get<Country[]>(query);
    

  }

  buscarPorRegion(termino: string) : Observable<Country[]>{

    const query : string = `${environment.url}/region/${termino}` ;
    
    const params = new HttpParams().set('fields','name,population,flags,cca2');

    return this.http.get<Country[]>(query, {params});
    

  }

  buscarPorId(termino: string) : Observable<Country>{

    

    

    const query : string = `${environment.url}/alpha/${termino}` ;

    return this.http.get<Country>(query);
    

  }


}
