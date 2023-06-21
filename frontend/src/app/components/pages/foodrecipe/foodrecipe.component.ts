import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-foodrecipe',
  templateUrl: './foodrecipe.component.html',
  styleUrls: ['./foodrecipe.component.css'],
})
export class FoodrecipeComponent implements OnInit {
  recipe: any = {};
  newRecipe: any = {};
  recipeId: any;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeId = 'recipeId'; // Replace 'your-recipe-id' with an actual recipe ID
    this.recipeService.getRecipe(this.recipeId).subscribe(
      (data: any) => {
        this.recipe = data;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  // ngOnInit() {
  //   this.getRecipe();
  // }

  // getRecipe() {
  //   // Assuming you have a method in RecipeService to fetch a single recipe by ID
  //   this.recipeService.getRecipe('recipeId')
  //     .subscribe(
  //       (response: any) => {
  //         console.log(response);
  //         this.recipe = response.recipe;
  //       },

  //       (error) => {
  //         console.error(error);
  //       }
  //     );
  // }

  // addRecipe() {
  //   this.recipeService.addRecipe(this.newRecipe)
  //     .subscribe(
  //       (response: any) => {
  //         this.recipe = response.recipe;
  //         this.newRecipe = {};
  //       },
  //       (error) => {
  //         console.error(error);
  //       }
  //     );
  // }

  // deleteRecipe(recipeId: string) {
  //   this.recipeService.deleteRecipe(recipeId)
  //     .subscribe(
  //       () => {
  //         // Handle success if needed
  //       },
  //       (error) => {
  //         console.error(error);
  //       }
  //     );
  // }
}
