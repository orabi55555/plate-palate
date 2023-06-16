import { Component } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-creatfood',
  templateUrl: './creatfood.component.html',
  styleUrls: ['./creatfood.component.css']
})
export class CreatfoodComponent {
     title: any;
    summary: string | undefined;
    image: string | undefined;
    category: string | undefined;
    price: number | undefined;

  
    constructor(private foodService: FoodService ,private router: Router) {}
  
    onSubmit() {
      const newFood = {
        title: this.title,
        summary: this.summary,
        image: this.image,
        category: this.category,
        price: this.price
      };
  
      this.foodService.createFood(newFood).subscribe(
          data => console.log(data),
          error => console.log(error)
        );
        this.router.navigateByUrl('/dashboard_food');
    }
  }
