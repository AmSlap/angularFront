import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Booking } from '../models/booking.model'; // Assuming you have a Booking model

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private apiUrl = `${environment.apiUrl}BOOKING-SERVICE/api/bookings`; // The backend API URL

  constructor(private http: HttpClient) {}

  // 1. Get all bookings
  getAllBookings(): Observable<Booking[]> {
    return this.http.get<Booking[]>(`${this.apiUrl}/all`);
  }

  // 2. Get a booking by ID
  getBookingById(id: number): Observable<Booking> {
    return this.http.get<Booking>(`${this.apiUrl}/${id}`);
  }

  // 3. Get bookings by user ID
  getBookingsByUserId(userId: number): Observable<Booking[]> {
    return this.http.get<Booking[]>(`${this.apiUrl}/user/${userId}`);
  }

  // 4. Create a new booking
  createBooking(booking: Booking): Observable<Booking> {
    return this.http.post<Booking>(`${this.apiUrl}/create`, booking);
  }

  // 5. Confirm a booking by ID
  confirmBooking(id: number): Observable<Booking> {
    return this.http.put<Booking>(`${this.apiUrl}/confirm/${id}`, {});
  }

  // 6. Cancel a booking by ID
  cancelBooking(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/cancel/${id}`);
  }
}
