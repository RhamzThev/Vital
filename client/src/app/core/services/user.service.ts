import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import User from '@declare/user';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = `${environment.apiUrl}:3000/api/users`


  constructor(private httpClient: HttpClient, private cookieService: CookieService) { }

  getLoggedInUser(): Observable<User> {
    return this.httpClient.get<User>(`${this.url}/session`, { withCredentials: true });
  }

}
