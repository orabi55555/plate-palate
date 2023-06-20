import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
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
  country: { _id: string, name: string }[] = [];

  constructor(private recipeService: RecipeService ,private router: Router) {}

  ngOnInit() {
    this.getAllCountries();
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
    const newFood = {
      title: this.title,
      recipe_image: this.recipe_image,
      preparationTime: this.preparationTime,
      cookingTime: this.cookingTime,
      country: this.country
    };

    this.recipeService.addRecipe(newFood).subscribe(
        data => console.log(data),
        error => console.log(error)
      );
      this.router.navigateByUrl('/dashboard-recipe');
  }
}
