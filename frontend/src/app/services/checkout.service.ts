import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})

export class CheckoutService {
  private apiUrl = 'http://localhost:7000/api/checkout/charge';

  constructor(private readonly myClient: HttpClient) { }


  total: number = 0;
  cartItems = [];
  flag : any;

  setCartObject(total: number, cart: any, flag : any) {
    this.total = total;
    this.cartItems = cart;
    this.flag = flag;
  }

  sendDataToStripe(cardN:any, cardM:any , cardY :any, cardCVC :any) {
    return this.myClient.post(this.apiUrl, { cardN, cardM, cardY, cardCVC });

  }

}
