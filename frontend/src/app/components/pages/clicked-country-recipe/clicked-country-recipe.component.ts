import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-clicked-country-recipe',
  templateUrl: './clicked-country-recipe.component.html',
  styleUrls: ['./clicked-country-recipe.component.css']
})
export class ClickedCountryRecipeComponent implements OnInit {
  country: any;
  recipes: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private countryService: CountryService
  ) {}

  ngOnInit() {

    const countryId = this.route.snapshot.paramMap.get('countryId');
    if (countryId) {
      this.getCountryWithRecipes(countryId);
    }

  }

  getCountryWithRecipes(countryId: string) {
    console.log('Country ID:', countryId); // Add this line to check the countryId value

    this.countryService.getCountryWithRecipes(countryId).subscribe(
      response => {
        console.log('API Response:', response); // Add this line to log the response

        this.country = response.country;
        this.recipes = response.recipes || [];
      },
      error => {
        console.log('Error:', error);
      }
    );
  }



}
