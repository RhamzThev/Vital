import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  SID: string = 'connect.sid'
  url: string = "http://localhost:3000/api/auth"

  constructor(private httpClient: HttpClient, private cookieService: CookieService) { }

  isLoggedIn(): boolean {
    return this.cookieService.check(this.SID);
  }

  login(username: string, password: string): Observable<any> {
    return this.httpClient.post(`${this.url}/login`, { username, password }, { withCredentials: true });
  }

  signup(username: string, password: string, email: string, sex: string, birthdate: Date, weight: string, height: string,): Observable<any> {
    return this.httpClient.post(`${this.url}/signup`, { username, password, email, sex, birthdate, weight, height }, { withCredentials: true });
  }

  logout() {
    this.cookieService.delete(this.SID);
    return this.httpClient.post(`${this.url}/logout`, {}, { withCredentials: true })
  }
}