import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-countries-recipes',
  templateUrl: './countries-recipes.component.html',
  styleUrls: ['./countries-recipes.component.css'],
  providers: [CountryService],
})
export class CountriesRecipesComponent implements OnInit {
  countries: any[] = [];

  constructor(private countryService: CountryService) {}

  ngOnInit() {
    this.getAllCountries();
  }

  getAllCountries() {
    this.countryService
      .getAllCountries()

      .subscribe(
        (response) => {
          this.countries = response;
          console.log(this.countries);
        },
        (error) => {
          console.error('Error:', error);
        }
      );
  }
}
