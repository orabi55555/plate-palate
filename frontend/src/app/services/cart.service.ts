// import { Injectable } from '@angular/core';
// import { MatSnackBar } from '@angular/material/snack-bar';
// import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
// import { Cart } from '../shared/models/Cart';
// import { CartItem } from '../shared/models/CartItem';

// @Injectable({
//   providedIn: 'root',
// })
// export class CartService {
//   cart = new BehaviorSubject<Cart>({ items: [] });

//   constructor(private _snackBar: MatSnackBar) {}

//   addToCart(item: CartItem): void {
//     const items = [...this.cart.value.items];

//     const itemInCart = items.find((_item) => _item.id === item.id);
//     if (itemInCart) {
//       itemInCart.quantity += 1;
//     } else {
//       items.push(item);
//     }

//     this.cart.next({ items });
//     this._snackBar.open('1 item added to cart.', 'Ok', { duration: 3000 });
//   }

//   removeFromCart(item: CartItem, updateCart = true): CartItem[] {
//     const filteredItems = this.cart.value.items.filter(
//       (_item) => _item.id !== item.id
//     );

//     if (updateCart) {
//       this.cart.next({ items: filteredItems });
//       this._snackBar.open('1 item removed from cart.', 'Ok', {
//         duration: 3000,
//       });
//     }

//     return filteredItems;
//   }

//   removeQuantity(item: CartItem): void {
//     let itemForRemoval!: CartItem;

//     let filteredItems = this.cart.value.items.map((_item) => {
//       if (_item.id === item.id) {
//         _item.quantity--;
//         if (_item.quantity === 0) {
//           itemForRemoval = _item;
//         }
//       }

//       return _item;
//     });

//     if (itemForRemoval) {
//       filteredItems = this.removeFromCart(itemForRemoval, false);
//     }

//     this.cart.next({ items: filteredItems });
//     this._snackBar.open('1 item removed from cart.', 'Ok', {
//       duration: 3000,
//     });
//   }

//   clearCart(): void {
//     this.cart.next({ items: [] });
//     this._snackBar.open('Cart is cleared.', 'Ok', {
//       duration: 3000,
//     });
//   }

//   getTotal(items: CartItem[]): number {
//     return items
//       .map((item) => item.price * item.quantity)
//       .reduce((prev, current) => prev + current, 0);
//   }
// }
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/CartItem';
import { Food } from '../shared/models/Food';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Cart = this.getCartFromLocalStorage();
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);
  constructor() { }

  addToCart(food: Food): void {
    let cartItem = this.cart.items
      .find(item => item.food.id === food.id);
    if (cartItem)
      return;

    this.cart.items.push(new CartItem(food));
    this.setCartToLocalStorage();
  }

  removeFromCart(foodId: string): void {
    this.cart.items = this.cart.items
      .filter(item => item.food.id != foodId);
    this.setCartToLocalStorage();
  }

  changeQuantity(foodId: string, quantity: number) {
    let cartItem = this.cart.items
      .find(item => item.food.id === foodId);
    if (!cartItem) return;

    cartItem.quantity = quantity;
    cartItem.price = quantity * cartItem.food.price;
    this.setCartToLocalStorage();
  }

  clearCart() {
    this.cart = new Cart();
    this.setCartToLocalStorage();
  }

  getCartObservable(): Observable<Cart> {
    return this.cartSubject.asObservable();
  }

  getCart(): Cart{
    return this.cartSubject.value;
  }

  private setCartToLocalStorage(): void {
    this.cart.totalPrice = this.cart.items
      .reduce((prevSum, currentItem) => prevSum + currentItem.price, 0);
    this.cart.totalCount = this.cart.items
      .reduce((prevSum, currentItem) => prevSum + currentItem.quantity, 0);

    const cartJson = JSON.stringify(this.cart);
    localStorage.setItem('Cart', cartJson);
    this.cartSubject.next(this.cart);
  }

  private getCartFromLocalStorage(): Cart {
    const cartJson = localStorage.getItem('Cart');
    return cartJson ? JSON.parse(cartJson) : new Cart();
  }
}