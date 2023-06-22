import { Component, OnInit,OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CartService } from '../../../services/cart.service';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';



  @Component({
    selector: 'app-cart-page',
    templateUrl: './cart-page.component.html',
    styleUrls: ['./cart-page.component.css']
  })
  export class CartPageComponent implements OnInit,  OnDestroy {
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
        this.cartService.getCartItems(this.userId).subscribe(
          (response: any) => {
           console.log('Cart items response:', response);
            this.cart = response;
           // this.cartItems = response.data.items;
           // console.log("cart is "+this.cart);
            
          },
          (error: any) => {
            console.error('Cart items error:', error);
          }
        );
      } else {
        console.error('No user ID found!');
      }
    }

    ngOnDestroy(): void {
      this.cartSubscription.unsubscribe();
    }


    // addItemToCart(foodId: string, quantity: string): void {
    //   if (!this.userId) {
    //     return console.error('userId is missing');
    //   }

    //   this.cartService.addItemToCart(this.userId, foodId, parseInt(quantity)).subscribe(
    //     (cart) => {
    //       console.log("old cart "+this.cart);
          
    //       this.cart.push(cart);
    //       console.log("new cart "+this.cart);
          
    //     },
    //     (error) => {
    //       console.error(error);
    //     }
    //   );
    // }
    updateCartItemQuantity(foodId: string, quantity: string): void {
      this.cartService.updateCartItemQuantity(this.userId!, foodId, parseInt(quantity)).subscribe(
        (cart) => {
          this.cart = cart;
        },
        (error) => {
          console.error(error);
        }
      );
    }

    removeItemFromCart(foodId: string): void {
      this.cartService.removeItemFromCart(this.userId!, foodId).subscribe(
        (cart) => {
          this.cart = cart;
        },
        (error) => {
          console.error(error);
        }
      );
    }

    incrementCartItemQuantity(foodId: string): void {
      this.cartService.incrementCartItemQuantity(this.userId!, foodId).subscribe(
        (cart) => {
          this.cart = cart;
        },
        (error) => {
          console.error(error);
        }
      );
    }

    decrementCartItemQuantity(foodId: string): void {
      this.cartService.decrementCartItemQuantity(this.userId!, foodId).subscribe(
        (cart) => {
          this.cart = cart;
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }

