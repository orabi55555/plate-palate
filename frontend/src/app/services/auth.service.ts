import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { from,lastValueFrom } from 'rxjs';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


interface ApiResponse {
  [x: string]: string;
  message: string;
  accessToken: string;

}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly apiUrl = 'http://localhost:7000/api/v1/users';
  private accessToken: string | null = null;

  constructor(private http: HttpClient) {
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

  // logout(): Observable<ApiResponse> {
  //   return this.http.post<ApiResponse>(`${this.apiUrl}/logout`, null).pipe(
  //     tap(() => {
  //       this.accessToken = null;
  //     })
  //   );
  // }

  // async logout(): Promise<void> {
  //   // Set the authorization token in the header
  //   const headers = { Authorization: `Bearer ${this.accessToken}` };

  //   // Define the API base URL
  //   const apiUrl = 'http://localhost:7000/api/v1/users';

  //   // Send a POST request to the server's logout endpoint with the authorization header
  //   await lastValueFrom(
  //     from(
  //       this.http.post<any>(`${apiUrl}/logout`, {}, { headers })
  //     ).pipe(
  //       map(response => {
  //         localStorage.removeItem('user');
  //         this.accessToken = null;
  //       }),
  //       catchError(error => {
  //         console.error(`An error occurred: ${error.message}`);
  //         return throwError(error);
  //       })
  //     )
  //   );
  // }


  // async logout(): Promise<void> {
  //   // Set the authorization token in the header
  //   const headers = { Authorization: `Bearer ${this.accessToken}` };

  //   // Send a POST request to the server's logout endpoint with the authorization header
  //   await lastValueFrom(
  //     from(
  //       this.http.post<any>(`${this.apiUrl}/logout`, {}, { headers })
  //     ).pipe(
  //       map(response => {
  //         localStorage.removeItem('user');
  //         this.accessToken = null; // Move this line here
  //       }),
  //       catchError(error => {
  //         console.error(`An error occurred: ${error.message}`);
  //         return throwError(error);
  //       })
  //     )
  //   );
  // }

  // async logout(): Promise<void> {
  //   // Send a POST request to the server's logout endpoint
  //   await lastValueFrom(from(this.http.post<any>(`${this.apiUrl}/logout`, {}))
  //     .pipe(
  //       map(response => {
  //         this.accessToken = null;
  //         localStorage.removeItem('user');
  //       })
  //     )
  //   );
  // }

  resetPassword(email: string): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${this.apiUrl}/reset-password`, { email });
  }

  changePassword(resetToken: string, newPassword: string): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${this.apiUrl}/change-password`, { resetToken, password: newPassword });
  }

  isAuthenticated(): boolean {
    return !!this.accessToken;
  }

  getAccessToken(): string | null {
    return this.accessToken;
  }
}
