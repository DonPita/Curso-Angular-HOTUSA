import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {

  public countries: Country[] = [];
  public isLoading: boolean = false;

  constructor(private countriesSevice: CountriesService) { }

  searchByCapital(term: string):void {
    this.isLoading = true;

    this.countriesSevice.searchCapital(term)
      .subscribe( countries => { //si no te suscribes no funciona
        this.countries = countries;
        this.isLoading = false;
      });



  }
}
