import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private baseUrl = 'http://localhost:7000';

  constructor(private http: HttpClient) { }

  processPayment(amount: number, cardInfo: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/charge/payment`, { name: cardInfo.name, cardNumber: cardInfo.cardN, expMonth: cardInfo.cardM, expYear: cardInfo.cardY, cvv: cardInfo.cardCVC, amount });
  }
}