import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  foods: any[] | undefined;
category: any;
  constructor(private foodService: FoodService,private router: Router) { }

  ngOnInit(): void {
    this.foodService.getAllFoods().subscribe(data => {
      this.foods = data;
      console.log(this.foods);
    });

  }



  searchByCategory() {
    this.foodService.searchFoodsByCategory(this.category)
      .subscribe(foods => {
        this.foods = foods;
        console.log(foods)
      });
  }
}
