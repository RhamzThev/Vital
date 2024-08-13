import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import Food from '@declare/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  url: string = "http://localhost:3000/api/foods"


  constructor(private http: HttpClient, private cookieService: CookieService) { }

  // Get all foods
  getFoods(): Observable<Food[]> {
    return this.http.get<Food[]>(this.url);
  }

  // Get food by ID
  getFoodById(id: string): Observable<Food> {
    return this.http.get<Food>(`${this.url}/${id}`);
  }

  // Create a new food
  createFood(name: string, units_type: string, units: number, calories: number, fats: number, carbs: number, proteins: number): Observable<Food> {
    return this.http.post<Food>(this.url, { name, units_type, units, calories, fats, carbs, proteins }, { withCredentials: true });
  }

  // Update food by ID
  updateFood(id: string, name: string, units_type: string, units: number, calories: number, fats: number, carbs: number, proteins: number): Observable<Food> {
    return this.http.put<Food>(`${this.url}/${id}`, { name, units_type, units, calories, fats, carbs, proteins });
  }

  // Delete food by ID
  deleteFood(id: string): Observable<any> {
    return this.http.delete<any>(`${this.url}/${id}`);
  }
}
