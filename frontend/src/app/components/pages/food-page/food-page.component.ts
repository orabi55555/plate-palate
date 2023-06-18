import { Component, OnInit } from '@angular/core';
//import { Food } from 'src/app/'; //not completed
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';


@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit {
  //food! : Food;
//   constructor(activatedRoute:ActivatedRoute, foodService:FoodService) {
//     activatedRoute.params.subscribe((params) => {
//       if(params.id)
//       this.food = foodService.getFoodById(params.id);

// })

ID:any;
food:any;
constructor(myRoute:ActivatedRoute,public myService: FoodService ){
  this.ID = myRoute.snapshot.params["id"];
}
ngOnInit(): void {
  this.myService.getFoodById(this.ID).subscribe(
    {
      next:(data)=>{
        this.food = data;
      },
      error:(err)=>{console.log(err)}
    }
  );
}
}
