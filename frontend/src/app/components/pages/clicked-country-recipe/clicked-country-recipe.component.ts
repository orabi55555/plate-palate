import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from 'src/app/services/country.service';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-clicked-country-recipe',
  templateUrl: './clicked-country-recipe.component.html',
  styleUrls: ['./clicked-country-recipe.component.css'],
  animations: [
    trigger('recipeAnimation', [
      state('in', style({ opacity: 1, transform: 'translateY(0)' })),
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-100px)' }),
        animate('0.3s ease-out'),
      ]),
      transition(':leave', [
        animate(
          '0.3s ease-out',
          style({ opacity: 0, transform: 'translateY(100px)' })
        ),
      ]),
    ]),
  ],
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
