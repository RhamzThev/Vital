import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url: string = "http://localhost:8080/api/auth"

  constructor(private httpClient: HttpClient, private cookieService: CookieService) { }

  isLoggedIn(): boolean {
    return this.cookieService.check('connect.sid');
  }

  login(username: string, password: string): Observable<any> {
    return this.httpClient.post(`${this.url}/login`, { username, password }, { withCredentials: true });
  }
}