// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-cart-page',
//   templateUrl: './cart-page.component.html',
//   styleUrls: ['./cart-page.component.css']
// })
// export class CartPageComponent implements OnInit{
//   cart: any;
//   private apiUrl = '/api/cart';
//   constructor(private http: HttpClient) { }
 
//   ngOnInit(): void {
//     const userId = '648a11994f02237fc13bee13'; 
//     this.http.get(userId).subscribe((cart) => {
//       this.cart = cart;
//     });
//   }

//   updateCartItemQuantity(foodId: string, quantity: number): void {
//     const userId = '123'; // Replace with the actual user ID
//     this.http.put(`/api/cart/item`, { userId, foodId, quantity }).subscribe((cart) => {
//       this.cart = cart;
//     });
//   }

//   removeItemFromCart(foodId: string): void {
//     const userId = '123'; // Replace with the actual user ID
//     this.http.delete(`/api/cart/item/${userId}/${foodId}`).subscribe((cart) => {
//       this.cart = cart;
//     });
//   }

//   incrementCartItemQuantity(foodId: string): void {
//     const userId = '123'; // Replace with the actual user ID
//     this.http.put(`/api/cart/item/increment/${userId}/${foodId}`, {}).subscribe((cart) => {
//       this.cart = cart;
//     });
//   }

//   decrementCartItemQuantity(foodId: string): void {
//     const userId = '123'; // Replace with the actual user ID
//     this.http.put(`/api/cart/item/decrement/${userId}/${foodId}`, {}).subscribe((cart) => {
//       this.cart = cart;
//     });
//   }
// // }
// import { Component, OnInit } from '@angular/core';
// import { CartService } from '../../../services/cart.service';

// @Component({
//   selector: 'app-cart-page',
//   templateUrl: './cart-page.component.html',
//   styleUrls: ['./cart-page.component.css']
// })
// export class CartPageComponent implements OnInit {

  // cart: any;

  // constructor(private cartService: CartService) { }

  // ngOnInit(): void {
  //   const userId = '648a11994f02237fc13bee13'; // replace with your actual userId
  //   this.cartService.getCart(userId).subscribe((cart) => {
  //     this.cart = cart;
  //   });
  // }

  // addItem(foodId: string, quantityStr: string): void {
  //   const quantity = Number(quantityStr);
  //   const userId = '648a11994f02237fc13bee13'; // replace with your actual userId
  //   this.cartService.addItemToCart(userId, foodId, quantity).subscribe((cart) => {
  //     this.cart = cart;
  //   });
  // }
 
  //   cart: any;
  
  //   constructor(private cartService: CartService) { }
  
  //   ngOnInit(): void {
  //     this.cartService.getCart('user123').subscribe(
  //       (cart) => {
  //         this.cart = cart;
  //       },
  //       (error) => {
  //         console.error(error);
  //       }
  //     );
  //   }
  
  //   addItemToCart(foodId: string, quantity: number): void {
  //     this.cartService.addItemToCart('user123', foodId, quantity).subscribe(
  //       (cart) => {
  //         this.cart = cart;
  //       },
  //       (error) => {
  //         console.error(error);
  //       }
  //     );
  //   }
  
  //   updateCartItemQuantity(foodId: string, quantity: number): void {
  //     this.cartService.updateCartItemQuantity('user123', foodId, quantity).subscribe(
  //       (cart) => {
  //         this.cart = cart;
  //       },
  //       (error) => {
  //         console.error(error);
  //       }
  //     );
  //   }
  
  //   removeItemFromCart(foodId: string): void {
  //     this.cartService.removeItemFromCart('user123', foodId).subscribe(
  //       (cart) => {
  //         this.cart = cart;
  //       },
  //       (error) => {
  //         console.error(error);
  //       }
  //     );
  //   }
  
  //   incrementCartItemQuantity(foodId: string): void {
  //     this.cartService.incrementCartItemQuantity('user123', foodId).subscribe(
  //       (cart) => {
  //         this.cart = cart;
  //       },
  //       (error) => {
  //         console.error(error);
  //       }
  //     );
  //   }
  
  //   decrementCartItemQuantity(foodId: string): void {
  //     this.cartService.decrementCartItemQuantity('user123', foodId).subscribe(
  //       (cart) => {
  //         this.cart = cart;
  //       },
  //       (error) => {
  //         console.error(error);
  //       }
  //     );
  //   }
  // }

  import { Component, OnInit } from '@angular/core';
  import { CartService } from '../../../services/cart.service';

  @Component({
    selector: 'app-cart-page',
    templateUrl: './cart-page.component.html',
    styleUrls: ['./cart-page.component.css']
  })
  export class CartPageComponent implements OnInit {
   // cart: Array<any>;
     // cart: any[];
     cart: any;     
    userId?: string;

    constructor(private cartService: CartService) { }
  
    ngOnInit(): void {
      const userIdFromStorage = localStorage.getItem('userId');
      this.userId = userIdFromStorage !== null ? userIdFromStorage : undefined;
  
      if (this.userId) {
        console.log(this.cartService.getCart(this.userId));

        this.cartService.getCart(this.userId).subscribe(
          (cart) => {
            this.cart = cart;
            console.log(cart);
          },
          (error) => {
            console.error(error);
          }
        );
      }
      
    }
  
    addItemToCart(foodId: string, quantity: string): void {
      this.cartService.addItemToCart(this.userId!, foodId, parseInt(quantity)).subscribe(
        (cart) => {
          this.cart = cart;
        },
        (error) => {
          console.error(error);
        }
      );
    }
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

