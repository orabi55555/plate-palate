import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../shared/models/User';

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
    return this.http.get(`${this.baseUrl}/api/user/${id}`);
  }

  //get all users for Dashboard
  getUsers(){
    return this.http.get<any[]>(`${this.baseUrl}/api/v1/users/users/getall`);
  }

  //search
  searchUserByName(name: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/api/v1/users/user/name/${name}`);
  }

}
