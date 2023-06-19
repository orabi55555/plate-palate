import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FoodService } from 'src/app/services/food.service';
import { Food } from '../../../shared/models/Food';

// interface FoodResponse {
//   data: any[];
//   total_meals: number;
// }

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // foods: any[] = [];
  // foods: Food[] = [];
  // total_meals: number = 0;
  foods: Food[] = [];
  totalMeals: number = 0;

  constructor(private api: FoodService) {}

  ngOnInit(): void {
    this.api.getAllFoods().subscribe((data: any) => {
      this.foods = data as any[];
      this.totalMeals = data.totalMeals;
    });


  // ngOnInit(): void {
  //   this.api.getAllFoods().subscribe((response: FoodResponse) => {
  //     this.foods = response.data;
  //     this.total_meals = response.total_meals;
  //   });
  // }

//   ngOnInit(): void {
//     this.api.getAllFoods().subscribe((foods: any[]) => {
//       this.foods = foods;
//       this.total_meals = foods.length;
//     });
//   }

// ngOnInit(): void {
//   this.api.getAllFoods().subscribe(({ foods, totalMeals }) => {
//     this.foods = foods;
//     this.totalMeals = totalMeals;
//   });
// }
}
}
