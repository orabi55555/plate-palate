import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

  // addRecipe(recipe: any) {
  //   return this.http.post<any>(`${this.baseUrl}/create`, recipe);
  // }

  // deleteRecipe(recipeId: string) {
  //   return this.http.delete(`${this.baseUrl}/${recipeId}`);
  // }
}
