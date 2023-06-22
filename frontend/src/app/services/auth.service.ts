import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { from,lastValueFrom } from 'rxjs';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

interface ApiResponse {
  // [x: string]: string;
  message: string;
  accessToken: string;
  user: {
    id: string; //t3del
    user_name: string;
    email: string;
    role: string;
  };
}

interface User {
  id: string;
  user_name: string;
  email: string;
  role: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly apiUrl = 'http://localhost:7000/api/v1/users';
  private accessToken: string | null = null;

  constructor(private http: HttpClient, private router: Router) {
    const token = localStorage.getItem('accessToken');
   }

  register(user: { user_name: string; email: string; password: string; gender: string; mobile: string; address: string; role: string; otp: string }): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${this.apiUrl}/register`, user);
  }

  login(credentials: { email: string; password: string }): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${this.apiUrl}/login`, credentials).pipe(
      tap(response => {
        this.accessToken = response.accessToken || null;
        this.accessToken = response.accessToken|| null ;
        localStorage.setItem('accessToken', response['accessToken']);
        localStorage.setItem('user', JSON.stringify(response['user']));
      })
    );
  }

  logout() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('user');
    this.accessToken = null;
    window.location.href = '/login';

  }

  googleSignIn(tokenId: string): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${this.apiUrl}/google-signin`, { tokenId }).pipe(
      tap(response => {
        this.accessToken = response.accessToken || null;
        localStorage.setItem('accessToken', response.accessToken);
        localStorage.setItem('user', JSON.stringify(response['user']));
      })
    );
  }



  resetPassword(email: string): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${this.apiUrl}/reset-password`, { email });
  }

  changePassword(resetToken: string, newPassword: string): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${this.apiUrl}/change-password`, { resetToken, password: newPassword });
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('accessToken');
    return !!token;
  }
  getAccessToken(): string | null {
    return this.accessToken;
  }


  getUserRole(): string | undefined {
    const userString = localStorage.getItem('user');
    if (userString) {
      const user = JSON.parse(userString);
      // console.log (user);
      return user.role;
    }
    return undefined;
    // return null;
  }

  isAdmin(): boolean {
    const userString = localStorage.getItem('user');
    if (userString) {
      const user = JSON.parse(userString);
      return user.role === 'admin';

    }
    // window.location.href = '/dashboard';

    return false;
  }

}
