import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Recipe } from '../shared/models/Recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private baseUrl = 'http://localhost:7000/api/Recipe'; // Update the API endpoint URL according to your backend configuration

  constructor(private http: HttpClient) { }

  // getRecipesByCountry(countryId: string) : Observable<any> {
  //   console.log(`getRecipesByCountry(${countryId})`);

  //   return this.http.get<any[]>(`${this.baseUrl}/${countryId}/recipes`);
  // }

  getRecipe(recipeId: string): Observable<any> {
    console.log(`getRecipe(${recipeId})`);
    return this.http.get(`${this.baseUrl}/${recipeId}`);
  }

  addRecipe(recipe: any) : Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/create`, recipe);
  }

  deleteRecipe(recipeId: string) {
    return this.http.delete(`${this.baseUrl}/${recipeId}`);
  }

//   getAllRecipe() {
//     return this.http.get<any[]>(`${this.baseUrl}/api/recipes`);

// }


getAllRecipe() {
  return this.http.get<any[]>(`${this.baseUrl}/`);
}

updateRecipeById(id: string, recipe: Recipe): Observable<Recipe> {
  return this.http.put<Recipe>(`${this.baseUrl}/update/${id}`, recipe);
}

getAllCountries(){
  return this.http.get<any[]>(`${this.baseUrl}/countries`);
}

searchRecipeByTitle(title: string): Observable<Recipe[]> {
  return this.http.get<Recipe[]>(`${this.baseUrl}/title/${title}`);
}

//get by id for dashboard
getRecipeById(id: string): Observable<any> {
  console.log(`getRecipeById(${id})`);
  return this.http.get(`${this.baseUrl}/get/${id}`);
}

}
