import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Food } from '../shared/models/Food';

@Injectable({
  providedIn: 'root'
})
export class CartService {
    baseUrl = 'http://localhost:3000/api/cart';

  constructor(private http: HttpClient) { }

  getCart(userId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${userId}`);
  }

  addToCart(userId: string, foodId: string, quantity: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/addToCart`, { userId, foodId, quantity });
  }

  removeFromCart(userId: string, foodId: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/removeFromCart/${userId}/${foodId}`);
  }

  changeCartItemQuantity(userId: string, foodId: string, quantity: number): Observable<any> {
    return this.http.put(`${this.baseUrl}/changeCartItemQuantity/${userId}/${foodId}`, { quantity });
  }
}