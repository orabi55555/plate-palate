import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  private baseUrl = 'http://localhost:7000';

  constructor(private http: HttpClient) { }

  getUserById(id: string): Observable<any> {
    console.log(`getUserById(${id})`);
    return this.http.get(`${this.baseUrl}/api/profile/user/${id}`);
  }

}
