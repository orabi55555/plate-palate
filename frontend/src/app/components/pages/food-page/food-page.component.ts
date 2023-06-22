import { Component, OnInit } from '@angular/core';
//import { Food } from 'src/app/'; //not completed
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { FoodService } from 'src/app/services/food.service';


@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit {
  //food! : Food;

  userId: string | undefined;
//   constructor(activatedRoute:ActivatedRoute, foodService:FoodService) {
//     activatedRoute.params.subscribe((params) => {
//       if(params.id)
//       this.food = foodService.getFoodById(params.id);

// })

ID:any;
food:any={};
constructor(myRoute:ActivatedRoute,public myService: FoodService ,private cartService: CartService, private authService: AuthService,){
  this.ID = myRoute.snapshot.params["id"];
}



ngOnInit(): void {

  
    const token = localStorage.getItem('accessToken');
    if (token !== null) {
      const decodedToken = JSON.parse(atob(token.split('.')[1]));
      console.log('Decoded token:', decodedToken);
      console.log('User ID:', decodedToken.userId);
      this.userId = decodedToken.userId;
      //this.getCartItems();
    } else {
      console.error('No token found!');
    }
  
  this.myService.getFoodById(this.ID).subscribe(
    {
      next:(data)=>{
        this.food = data;
      },
      error:(err)=>{console.log(err)}
    }
  );
}
addItemToCart(foodId: string, quantity: string): void {
  if (!this.userId) {
    return console.error('userId is missing');
  }

  this.cartService.addItemToCart(this.userId, foodId, parseInt(quantity)).subscribe(
    (cart) => {
      // console.log("old cart "+this.cart);
      
      // this.cart.push(cart);
      // console.log("new cart "+this.cart);
      console.log("item added "+cart);
      
    },
    (error) => {
      console.error(error);
    }
  );
}
}
