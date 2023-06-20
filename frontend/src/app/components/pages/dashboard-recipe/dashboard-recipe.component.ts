import { Component,OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-recipe',
  templateUrl: './dashboard-recipe.component.html',
  styleUrls: ['./dashboard-recipe.component.css']
})
export class DashboardRecipeComponent implements OnInit {
  recipes: any[] | undefined;

  constructor(private recipeService: RecipeService,private router: Router) { }
  ngOnInit(): void {
    this.recipeService.getAllRecipe().subscribe(data => {
      this.recipes = data;
       console.log(this.recipes);
    });
    

  }
  
  // searchByCategory() {
  //   this.recipeService.searchFoodsByCategory(this.category)
  //     .subscribe(recipes => {
  //       this.recipes = recipes;
  //       console.log(recipes)
  //     });
  // }
  deleteRecipe(id: string): void {
    console.log(id);
    this.recipeService.deleteRecipe(id).subscribe(() => {
        if (this.recipes) {
          this.recipes = this.recipes.filter(recipe => recipe._id !== id);
        }
        this.router.navigateByUrl('/dashboard-recipe');
      });
  }
  
}

