 import { HttpClient } from '@angular/common/http';
 import { Injectable } from '@angular/core';
 import { Observable } from 'rxjs';
//import { sample_orders } from 'src/data';
import { Order } from '../shared/models/Order';

 @Injectable({
   providedIn: 'root'
 })
export class OrderService {

  private baseUrl = 'http://localhost:7000';

    constructor(private http: HttpClient) { }
    getOrderById(id: string): Observable<any> {
      console.log(`getUserById(${id})`);
      return this.http.get(`${this.baseUrl}/api/order/${id}`);
    }
    getAllOrders() {
      return this.http.get<any[]>(`${this.baseUrl}/api/order/order`);
    }

    deleteOrderById(id: string): Observable<any> {
      return this.http.delete(`${this.baseUrl}/api/order/delete/${id}`);
    }
    createOrder(order: any) {
      const headers = { 'content-type': 'application/json' };
      const body = JSON.stringify({
        userID: order.userID,
        totalPrice: order.totalPrice,
        status: order.status,
        quantity: order.quantity,
        address: order.address,
        mealID: order.mealID

      });
      console.log(body);
      return this.http.post(`${this.baseUrl}/api/order/create`, body, { headers });
    }
    updateOrderById(id: string, order: Order): Observable<Order> {
      return this.http.put<Order>(`${this.baseUrl}/api/order/update/${id}`, order);
    }
  //    payOrderById(id: string,order:Order):Observable<string>{
  //     return this.http.post<Order>(`${this.baseUrl}/api/order/update/${id}`,order);
  // }

}
