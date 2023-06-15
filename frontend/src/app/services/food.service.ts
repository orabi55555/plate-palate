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
    return this.http.get(`${this.baseUrl}/api/profile/user/${id}`);
  }

 

  // getAll(): Food[] {
  //   return sample_foods;
  // }

  // getAllFoodsBySearchTerm(searchTerm: string) {
  //   return this.getAll().filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()));
  // }

  // // getAllTags():Tag[] {
  // //   return sample_tags;
  // // }

  // getAllFoodsByTag(tag: string):Food[] {
  //   return tag === "All" ?
  //     this.getAll() :
  //     this.getAll().filter(food => food.tags?.includes(tag));
  // }



}






