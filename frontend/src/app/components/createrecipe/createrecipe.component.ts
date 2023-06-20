import { Component } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createrecipe',
  templateUrl: './createrecipe.component.html',
  styleUrls: ['./createrecipe.component.css']
})
export class CreaterecipeComponent {
    title: any;
    recipe_image: string | undefined;
    preparationTime: string | undefined;
    cookingTime: string | undefined;

    constructor(private recipeService: RecipeService ,private router: Router) {}

    onSubmit() {
      const newFood = {
        title: this.title,
        recipe_image: this.recipe_image,
        preparationTime: this.preparationTime,
        cookingTime: this.cookingTime
      };

      this.recipeService.addRecipe(newFood).subscribe(
          data => console.log(data),
          error => console.log(error)
        );
        this.router.navigateByUrl('/dashboard-recipe');
    }
  }



