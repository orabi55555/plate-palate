import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-foodrecipe',
  templateUrl: './foodrecipe.component.html',
  styleUrls: ['./foodrecipe.component.css'],
})
export class FoodrecipeComponent implements OnInit {
  recipeId: string | null = null;
  recipe: any;
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.recipeId = params['id'];
      this.getRecipe();
    });
  }

  getRecipe() {
    if (this.recipeId) {
      this.recipeService.getRecipe(this.recipeId).subscribe(
        (response) => {
          this.recipe = response.recipe;
        },
        (error) => {
          this.error = error.message;
        }
      );
    } else {
      this.error = 'Invalid recipe ID';
    }
  }
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
