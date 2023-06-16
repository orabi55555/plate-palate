import { Component,OnInit } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard-food',
  templateUrl: './dashboard-food.component.html',
  styleUrls: ['./dashboard-food.component.css']
})
export class DashboardFoodComponent implements OnInit {
  foods: any[] | undefined;
category: any;
  constructor(private foodService: FoodService,private router: Router) { }

  ngOnInit(): void {
    this.foodService.getAllFoods().subscribe(data => {
      this.foods = data;
    });
    

  }
   deleteFood(id: string): void {
    console.log(id);
    this.foodService.deleteFoodById(id).subscribe(() => {
        if (this.foods) {
          this.foods = this.foods.filter(food => food._id !== id);
        }
        this.router.navigateByUrl('/dashboard_food');
      });
  }
  
}
