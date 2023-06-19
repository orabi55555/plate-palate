import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
//import { Cart } from 'src/app/shared/models/Cart';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  userId: string = '';
  cart: any;
  constructor(private cartService: CartService) { }
  ngOnInit(): void {// Replace with actual user ID
     this.userId = '123'; 
    this.getCart();
  }
  getCart(): void {
    this.cartService.getCart(this.userId)
      .subscribe(cart => this.cart = cart);
  }
  addToCart(foodId: string, quantity: number): void {
    this.cartService.addToCart(this.userId, foodId, quantity)
      .subscribe(cart => this.cart = cart);
  }
  removeFromCart(foodId: string): void {
    this.cartService.removeFromCart(this.userId, foodId)
      .subscribe(cart => this.cart = cart);
  }

  changeCartItemQuantity(foodId: string, quantity: number): void {
    this.cartService.changeCartItemQuantity(this.userId, foodId, quantity)
      .subscribe(cart => this.cart = cart);
  }
}