import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CartService } from '../../../services/cart.service';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';



  @Component({
    selector: 'app-cart-page',
    templateUrl: './cart-page.component.html',
    styleUrls: ['./cart-page.component.css']
  })
  export class CartPageComponent implements OnInit{
    private accessToken: string | null = null;

     cart: any;
     userId: string | undefined;
     cartSubscription: Subscription = new Subscription();
    cartItems: any[] = [];



    constructor(private cartService: CartService, private authService: AuthService, private http: HttpClient  ) { }
    logFoodId(foodId: any) {
      console.log(foodId);
    }

    ngOnInit(): void {
      const token = localStorage.getItem('accessToken');
      if (token !== null) {
        const decodedToken = JSON.parse(atob(token.split('.')[1]));
        console.log('Decoded token:', decodedToken);
        console.log('User ID:', decodedToken.userId);
        this.userId = decodedToken.userId;
        this.getCartItems();
      } else {
        console.error('No token found!');
      }
    }

    
    getCartItems(): void {
      if (this.userId) {
        this.cartService.getCartItems(this.userId).subscribe({
          next: (response: any) => {
            console.log('Cart items response:', response);
            this.cart = response;
          },
          error: (error: any) => {
            console.error('Cart items error:', error);
          }
        });
      } else {
        console.error('No user ID found!');
      }
    }

   

    getTotalPrice(): number {
      let totalPrice = 0;
      for (const item of this.cart?.items || []) {
        totalPrice += item.foodId?.price * item.quantity;
      }
      return totalPrice;
    }
   
    updateCartItemQuantity(foodId: string, quantity: string): void {
      this.cartService.updateCartItemQuantity(this.userId!, foodId, parseInt(quantity)).subscribe({
        next:(cart) => {
          this.cart = cart;
        },
        error:(error) => {
          console.error(error);
        }
      }
      );
    }

    removeItemFromCart(foodId: string): void {
      this.cartService.removeItemFromCart(this.userId!, foodId).subscribe({
      next:(cart) => {
          console.log("old cart "+this.cart);
          //this.cart = cart;
        },
       error: (error) => {
          console.error(error);
        }
        
      }
      );
    }

    incrementCartItemQuantity(foodId: string): void {
      this.cartService.incrementCartItemQuantity(this.userId!, foodId).subscribe({
       next:(cart) => {
          console.log("new cart "+this.cart);
         // this.cart = cart;
        },
      error: (error) => {
          console.error(error);
        }
      }
      );
    }

    decrementCartItemQuantity(foodId: string): void {
      this.cartService.decrementCartItemQuantity(this.userId!, foodId).subscribe({
       next: (cart) => {
          this.cart = cart;
        },
       error: (error) => {
          console.error(error);
        }
      }
      );
    }
  }

