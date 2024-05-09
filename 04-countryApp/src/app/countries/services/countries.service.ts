import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country';


@Injectable({ providedIn: 'root' })
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

  /*El retorno es un Observable, de un arreglo de paises, por tanto hay que
  decirselo al get tambien, si no da error*/
  searchCapital(term: string): Observable<Country[]> {
    //Mas fácil de leer de esta manera el codigo de abajo
    const url = `${this.apiUrl}/capital/${term}`;
    return this.http.get<Country[]>(url);
  }

}
