
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import FoodLog from '@declare/food-log';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class FoodLogService {
  private url = `${environment.apiUrl}:3000/api/foods/logs`; // Replace with your actual API URL

  constructor(private http: HttpClient) { }

  // Create a new food log
  createLog(food_id: string, consumption_time: string, amount: number): Observable<FoodLog> {
    return this.http.post<FoodLog>(this.url, { food_id, consumption_time, amount }, { withCredentials: true });
  }

  // Get all food logs
  getLogs(): Observable<FoodLog[]> {
    return this.http.get<FoodLog[]>(this.url);
  }

  // Get all food logs
  getLogsByUserId(): Observable<FoodLog[]> {
    return this.http.get<FoodLog[]>(`${this.url}/session`, { withCredentials: true });
  }

  // Get a food log by ID
  getLogById(id: string): Observable<FoodLog> {
    const url = `${this.url}/${id}`;
    return this.http.get<FoodLog>(url);
  }

  // Update a food log by ID
  updateLog(id: string, food_id: string, consumption_time: string, amount: number): Observable<FoodLog> {
    const url = `${this.url}/${id}`;
    return this.http.put<FoodLog>(url, { food_id, consumption_time, amount });
  }

  // Delete a food log by ID
  deleteLog(id: string): Observable<any> {
    const url = `${this.url}/${id}`;
    return this.http.delete<any>(url);
  }
} 