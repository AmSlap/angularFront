import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { TravelOption } from '../models/travel-option.model';

@Injectable({
  providedIn: 'root'
})
export class TravelOptionService {
  private apiUrl = `${environment.apiUrl}INVENTORY-SERVICE/api/inventory/options`;

  constructor(private http: HttpClient) {}

  // 1. Get all travel options
  getAllTravelOptions(): Observable<TravelOption[]> {
    return this.http.get<TravelOption[]>(this.apiUrl);
  }

  // 2. Get a travel option by ID
  getTravelOptionById(id: number): Observable<TravelOption> {
    return this.http.get<TravelOption>(`${this.apiUrl}/${id}`);
  }

  // 3. Create a new travel option
  createTravelOption(option: TravelOption): Observable<TravelOption> {
    return this.http.post<TravelOption>(this.apiUrl, option);
  }

  // 4. Update an existing travel option
  updateTravelOption(id: number, option: Partial<TravelOption>): Observable<TravelOption> {
    return this.http.put<TravelOption>(`${this.apiUrl}/${id}`, option);
  }

  // 5. Delete a travel option by ID
  deleteTravelOption(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
