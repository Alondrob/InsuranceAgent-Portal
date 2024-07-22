import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://your-api-endpoint'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  register(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, userData);
  }

  isAuthenticated(): Observable<boolean> {
    // Example logic to check authentication status
    return this.http.get(`${this.apiUrl}/is-authenticated`).pipe(
      map(response => true), // Replace with your actual response handling
      catchError(() => of(false))
    );
  }
}

