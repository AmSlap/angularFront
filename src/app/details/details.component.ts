import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TravelOptionService } from '../services/inventory.service';
import { BookingService } from '../services/booking.service';
import { TravelOption } from '../models/travel-option.model';
import { Booking } from '../models/booking.model';

@Component({
  selector: 'app-details',
  template: `
    <section>
      <h1>{{ travelOption?.name }}</h1>
      <img [src]="travelOption?.img" alt="image of {{travelOption?.name}}">
      <p><strong>Type:</strong> {{ travelOption?.type}}</p>
      <p><strong>Price:</strong> {{ travelOption?.price }}</p>
      <p><strong>Availability:</strong> {{ travelOption?.availability }}</p>
      <button (click)="reserve()">Reserver</button>
    </section>
  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  route = inject(ActivatedRoute);
  travelOptionService = inject(TravelOptionService);
  bookingService = inject(BookingService);

  travelOptionId: number = 0;
  travelOption: TravelOption | null = null;

  constructor() {
    this.travelOptionId = Number(this.route.snapshot.params['id']);
    this.loadTravelOption();
  }

  loadTravelOption(): void {
    this.travelOptionService.getTravelOptionById(this.travelOptionId).subscribe({
      next: (data) => (this.travelOption = data),
      error: (err) => console.error('Error fetching travel option:', err),
    });
  }

  reserve(): void {
    if (this.travelOption && this.travelOption.availability > 0) {
      const updatedTravelOption = { ...this.travelOption, availability: this.travelOption.availability - 1 };

      // Update the TravelOption availability in the backend
      this.travelOptionService.updateTravelOption(this.travelOption.id, updatedTravelOption).subscribe({
        next: () => {
          const booking: Booking = {

            userId: 1, // Replace with actual logged-in user ID
            travelOptionId: this.travelOptionId,
            quantity: 1,
            status: 'PENDING', // Default status is PENDING
          };

          this.bookingService.createBooking(booking).subscribe({
            next: (newBooking) => {
              console.log('Booking created successfully:', newBooking);
            },
            error: (err) => {
              console.error('Error creating booking:', err);
            }
          });
        },
        error: (err) => {
          console.error('Error updating travel option:', err);
        }
      });
    } else {
      alert('Not enough availability to book');
    }
  }

  getUserBookings(userId: number): void {
    this.bookingService.getBookingsByUserId(userId).subscribe({
      next: (bookings) => {
        console.log('User bookings:', bookings);
      },
      error: (err) => {
        console.error('Error fetching user bookings:', err);
      }
    });
  }
}
