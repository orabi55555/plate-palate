import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private baseUrl = 'http://localhost:7000/api/Country'; // Update with your backend URL

  constructor(private http: HttpClient) {}

  getAllCountries(): Observable<any> {
    const url = `${this.baseUrl}/countries/getall`;
    return this.http.get<any>(url);
  }
}
