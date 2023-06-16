import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FoodService } from 'src/app/services/food.service';
@Component({
  selector: 'app-update-food',
  templateUrl: './update-food.component.html',
  styleUrls: ['./update-food.component.css']
})
export class UpdateFoodComponent{
// implements OnInit{
//   food: any;

//   constructor(
//     private route: ActivatedRoute,
//     private foodService: FoodService
//   ) { }

//   ngOnInit() {
//     const id = this.route.snapshot.paramMap.get('id');
//     this.foodService.getFoodById(id!)
//       .subscribe(food => this.food = food);
//   }

//   onSubmit() {
//     this.foodService.updateFoodById(this.food._id, this.food)
//       .subscribe(updatedFood => this.food = updatedFood);
//   }

 }
