import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = "http://localhost:8080/api/users"

  constructor(private httpClient: HttpClient, private cookieService: CookieService) { }

  getLoggedInUser(): Observable<any> {
    return this.httpClient.get(`${this.url}/session`, { withCredentials: true });
  }

}
