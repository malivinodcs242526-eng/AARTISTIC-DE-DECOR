import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface AuthResponse {
  success: boolean;
  token: string;
}

export interface Admin {
  _id: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `${environment.apiUrl}/auth`;
  
  private currentUserSubject = new BehaviorSubject<Admin | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient) {
    this.checkAuthStatus();
  }

  login(email: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/login`, { email, password }).pipe(
      tap(response => {
        if (response.success && response.token) {
          localStorage.setItem('admin_token', response.token);
          this.checkAuthStatus();
        }
      })
    );
  }

  logout() {
    localStorage.removeItem('admin_token');
    this.currentUserSubject.next(null);
  }

  getToken(): string | null {
    return localStorage.getItem('admin_token');
  }

  get isLoggedIn(): boolean {
    return !!this.getToken();
  }

  checkAuthStatus() {
    const token = this.getToken();
    if (token) {
      this.http.get<{success: boolean, data: Admin}>(`${this.apiUrl}/me`).subscribe({
        next: (res) => {
          if (res.success) {
            this.currentUserSubject.next(res.data);
          }
        },
        error: () => {
          this.logout();
        }
      });
    } else {
      this.currentUserSubject.next(null);
    }
  }
}
