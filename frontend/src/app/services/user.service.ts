import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  logout() {
    throw new Error('Method not implemented.');
  }


  private baseUrl = 'http://localhost:7000';

  constructor(private http: HttpClient) { }

  getUserById(id: string): Observable<any> {
    console.log(`getUserById(${id})`);
    return this.http.get(`${this.baseUrl}/api/v1/users/${id}`);
  }

  // updateUserById(id: string, user: any, token:any): Observable<any> {
  //   const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  //   return this.http.put(`${this.baseUrl}api/user/${user.id}`, user, {headers});
  // }


  updateUserById(id: string, data: any): Observable<any> {
      
    return this.http.put(`${this.baseUrl}api/v1/users/${id}`, data);
  }

}
