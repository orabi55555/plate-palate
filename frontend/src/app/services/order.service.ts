import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private baseUrl = 'http://localhost:7000';

  constructor(private http: HttpClient) { }
  
  getOrders() {
    return this.http.get<any[]>(`${this.baseUrl}/api/orders/getorders`);

  }
    // Get a single order by ID
  // getOrderById(id) {
  //   return this.http.get(`/api/orders/${id}`);
  // }

  // Update an order by ID
  // updateOrderById(id, order) {
  //   return this.http.put(`/api/orders/${id}`, order);
  // }

  // Delete an order by ID
  // deleteOrderById(id) {
  //   return this.http.delete(`/api/orders/${id}`);
  // }

}
