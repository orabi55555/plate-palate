import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { CountryService } from '../../services/country.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createrecipe',
  templateUrl: './createrecipe.component.html',
  styleUrls: ['./createrecipe.component.css']
})


export class CreaterecipeComponent implements OnInit {
  title: any;
  recipe_image: string | undefined;
  preparationTime: string | undefined;
  cookingTime: string | undefined;
  // country: string[] = [];
  countries: { _id: string, name: string }[] = [];
  country: any;

 
  constructor(private recipeService: RecipeService ,private router: Router,private countryService: CountryService) {}

  ngOnInit() {
    this.countryService.getCountries().subscribe((countries: any) => {
      this.countries = countries;
    });
  }
  getAllCountries() {
    this.recipeService.getAllCountries()
      .subscribe(
        // response => {
        //   this.country = response.countries.map((c: any) => ({ _id: c.id, name: c.name }));
        // },
        error => {
          console.error('Error:', error);
        }
      );
  }

  onSubmit() {
    console.log('this.recipeForm.value.country:', this.country);
    const newFood = {
      title: this.title,
      recipe_image: this.recipe_image,
      preparationTime: this.preparationTime,
      cookingTime: this.cookingTime,
      country: this.country._id
    };
  
    this.recipeService.addRecipe(newFood).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
    this.router.navigateByUrl('/dashboard-recipe');
  }
}

  // getAllCountries() {
  //   this.recipeService.getAllCountries()
  //     .subscribe(
  //       response => {
  //         this.country = response.countries;
  //       },
  //       error => {
  //         console.error('Error:', error);
  //       }
  //     );
  // }

  // getAllCountries() {
  //   this.recipeService.getAllCountries()
  //     .subscribe(
  //       response => {
  //         this.country = response.country.map((c: any) => ({ _id: c.id, name: c.name }));
  //       },
  //       error => {
  //         console.error('Error:', error);
  //       }
  //     );
  // }


  // getAllCountries() {
  //   this.recipeService.getAllCountries()
  //     .subscribe(
  //       response => {
  //         this.country = response.countries.map((c: any) => c.name);
  //       },
  //       error => {
  //         console.error('Error:', error);
  //       }
  //     );
  // }




