//  import { Injectable } from '@angular/core';
//  import { HttpClient } from '@angular/common/http';
// import { BehaviorSubject, Observable } from 'rxjs'; 

//  @Injectable({
//    providedIn: 'root'
//  }) 
//  export class CartService {
//     private baseUrl = 'http://localhost:7000';
//     constructor(private http: HttpClient) { }
//     getCart() {
//         return this.http.get<any[]>(`${this.baseUrl}/api/cart/:userId`);

//       }
// //   private cart: Cart = this.getCartFromLocalStorage();
// //   private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);
// //   constructor() { }

// //   addToCart(food: Food): void {
// //     let cartItem = this.cart.items
// //       .find(item => item.food.id === food.id);
// //     if (cartItem)
// //       return;

// //     this.cart.items.push(new CartItem(food));
// //     this.setCartToLocalStorage();
// //   }

// //   removeFromCart(foodId: string): void {
// //     this.cart.items = this.cart.items
// //       .filter(item => item.food.id != foodId);
// //     this.setCartToLocalStorage();
// //   }

// //   changeQuantity(foodId: string, quantity: number) {
// //     let cartItem = this.cart.items
// //       .find(item => item.food.id === foodId);
// //     if (!cartItem) return;

// //     cartItem.quantity = quantity;
// //     cartItem.price = quantity * cartItem.food.price;
// //     this.setCartToLocalStorage();
// //   }

// //   clearCart() {
// //     this.cart = new Cart();
// //     this.setCartToLocalStorage();
// //   }

// //   getCartObservable(): Observable<Cart> {
// //     return this.cartSubject.asObservable();
// //   }

// //   getCart(): Cart{
// //     return this.cartSubject.value;
// //   }

// //   private setCartToLocalStorage(): void {
// //     this.cart.totalPrice = this.cart.items
// //       .reduce((prevSum, currentItem) => prevSum + currentItem.price, 0);
// //     this.cart.totalCount = this.cart.items
// //       .reduce((prevSum, currentItem) => prevSum + currentItem.quantity, 0);

// //     const cartJson = JSON.stringify(this.cart);
// //     localStorage.setItem('Cart', cartJson);
// //     this.cartSubject.next(this.cart);
// //   }

// //   private getCartFromLocalStorage(): Cart {
// //     const cartJson = localStorage.getItem('Cart');
// //     return cartJson ? JSON.parse(cartJson) : new Cart();
// //   }
// }
// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class CartService {

//   private apiUrl = '/api/v1/carts';

//   constructor(private http: HttpClient) { }

//   getCart(userId: string): Observable<any> {
//     return this.http.get<any>(`${this.apiUrl}/${userId}`);
//   }

//   addItemToCart(userId: string, foodId: string, quantity: number): Observable<any> {
//     const body = { foodId, quantity };
//     return this.http.post<any>(`${this.apiUrl}/${userId}`, body);
//   }

// }
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiUrl = 'http://localhost:7000/api/v1/carts';

  constructor(private http: HttpClient) { }



  getCartItems(userId: string):Observable<any> {
    const url = `${this.apiUrl}/${userId}`;
    return this.http.get(url);
  }

  addItemToCart(userId: string, foodId: string, quantity: number): Observable<any> {
    const body = { userId, foodId, quantity };

    return this.http.post<any>(`${this.apiUrl}/add-item`, body);
  }

  updateCartItemQuantity(userId: string, foodId: string, quantity: number): Observable<any> {
    const body = { userId, foodId, quantity };
    return this.http.put<any>(`${this.apiUrl}/${foodId}`, body);
  }

  removeItemFromCart(userId: string, foodId: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/remove-item/${userId}/${foodId}`);
  }

  incrementCartItemQuantity(userId: string, foodId: string): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/increment-item/${userId}/${foodId}`, {});
  }

  decrementCartItemQuantity(userId: string, foodId: string): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/decrement-item/${userId}/${foodId}`, {});
  }
  
}
