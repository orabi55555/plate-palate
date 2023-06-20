import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RecipeService } from 'src/app/services/recipe.service';
import{ Router } from '@angular/router';

@Component({
  selector: 'app-update-recipe',
  templateUrl: './update-recipe.component.html',
  styleUrls: ['./update-recipe.component.css']
})
export class UpdateRecipeComponent {

  recipe: any;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router
  ) { }

  // ngOnInit() {
  //   const id = this.route.snapshot.paramMap.get('id');
  //   console.log(id);
  //   this.recipeService.getRecipe(id!)
  //     .subscribe(recipe => this.recipe = recipe);
  //     console.log(this.recipe.preparationTime);
  // }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.recipeService.getRecipe(id!)
      .subscribe(recipe => this.recipe = recipe);
        // if (this.recipe) {
        //   console.log(this.recipe);
        //   console.log(id);
        //   console.log(this.recipe.title);
        //   console.log(this.recipe.preparationTime);
        // }

  }


  onSubmit() {
    this.recipeService.updateRecipeById(this.recipe._id, this.recipe)
      .subscribe(updatedRecipe => this.recipe = updatedRecipe);
      this.router.navigateByUrl('/dashboard-recipe');
  }

  // onSubmit() {
  //   this.recipeService.updateRecipeById(this.recipe._id, this.recipe)
  //     .subscribe(updatedRecipe => {
  //       this.recipe = updatedRecipe;
  //       this.router.navigateByUrl('/dashboard-recipe');
  //     });
  // }

 }
