import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
//implements OnInit
export class CartPageComponent {
 // food!: Food;
  // constructor(activatedRoute:ActivatedRoute, foodService:FoodService,
  //   private cartService:CartService, private router: Router) {
  //   activatedRoute.params.subscribe((params) => {
  //     if(params.id)
  //     foodService.getFoodById(params.id).subscribe(serverFood => {
  //       this.food = serverFood;
  //     });
  //   })
  //  }

  // ngOnInit(): void {
  // }

  // addToCart(){
  //   this.cartService.addToCart(this.food);
  //   this.router.navigateByUrl('/cart-page');
  // }

}
