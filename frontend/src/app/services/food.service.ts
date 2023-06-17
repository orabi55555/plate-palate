import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 import { sample_foods } from 'src/data';
  // import  sample_tags  from 'src/data';
import { Food } from '../shared/models/Food';


@Injectable({
  providedIn: 'root'
})
export class FoodService {
 


  private baseUrl = 'http://localhost:7000';

  constructor(private http: HttpClient) { }

  getFoodById(id: string): Observable<any> {
    console.log(`getUserById(${id})`);
    return this.http.get(`${this.baseUrl}/api/food/${id}`);
  }
  getAllFoods() {

    return this.http.get<any[]>(`${this.baseUrl}/api/food/foods`);

  }
  deleteFoodById(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/api/food/delete/${id}`);
  }

  createFood(food: any) {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify({
      title: food.title,
      summary: food.summary,
      image: food.image,
      category: food.category,
      price: food.price
    });
    console.log(body);
    return this.http.post(`${this.baseUrl}/api/food/create`, body, { headers });
  }

  searchFoodsByCategory(category: string): Observable<Food[]> {
    return this.http.get<Food[]>(`${this.baseUrl}/api/food/foods/category/${category}`);
  }

  //update
  updateFoodById(id: string, food: Food): Observable<Food> {
    return this.http.put<Food>(`${this.baseUrl}/api/food/update/${id}`, food);
  }

}






