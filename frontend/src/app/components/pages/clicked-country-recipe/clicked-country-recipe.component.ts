import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-clicked-country-recipe',
  templateUrl: './clicked-country-recipe.component.html',
  styleUrls: ['./clicked-country-recipe.component.css'],
})
export class ClickedCountryRecipeComponent implements OnInit {
  countryId!: string;
  country: any;
  recipes: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private countryService: CountryService
  ) {}

  ngOnInit(): void {
    this.countryId = this.route.snapshot.params['countryId'];
    console.log('Country ID:', this.countryId);

    this.countryService.getCountryWithRecipes(this.countryId).subscribe({
      next: (data) => {
        console.log(data);

        this.country = data.country;
        console.log('Country:', this.country);
        this.recipes = data.recipes || [];
        console.log('Recipes:', this.recipes);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
