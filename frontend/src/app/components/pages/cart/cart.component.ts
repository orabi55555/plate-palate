import { Component, OnInit } from '@angular/core';
//import { CartService } from 'src/app/services/cart.service';
//import { Cart } from 'src/app/shared/models/Cart';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  //cart!: Cart;
  // constructor(private cartService: CartService) {
  //   this.cartService.getCartObservable().subscribe((cart) => {
  //     this.cart = cart;
  //   })
  //  }

  ngOnInit(): void {
  }

  // removeFromCart(cartItem:CartItem){
  //   this.cartService.removeFromCart(cartItem.food.id);
  // }

  // changeQuantity(cartItem:CartItem,quantityInString:string){
  //   const quantity = parseInt(quantityInString);
  //   this.cartService.changeQuantity(cartItem.food.id, quantity);
  // }

}