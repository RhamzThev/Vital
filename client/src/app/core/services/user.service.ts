import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import User from '@declare/user';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = "http://localhost:8080/api/users"


  constructor(private httpClient: HttpClient, private cookieService: CookieService) { }

  getLoggedInUser(): Observable<User> {
    return this.httpClient.get<User>(`${this.url}/session`, { withCredentials: true });
  }

}
