import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { TravelOption } from '../models/travel-option.model';
import { TravelOptionComponent } from '../travel-option/travel-option.component';
import { CommonModule } from '@angular/common';
import { TravelOptionService } from '../services/inventory.service';



@Component({
  selector: 'app-home-page',
  imports: [HeaderComponent,TravelOptionComponent,CommonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  travelOptions: TravelOption[] = [];

  constructor(private travelOptionService: TravelOptionService) {}

  ngOnInit(): void {
    this.loadTravelOptions();
  }

  loadTravelOptions(): void {
    this.travelOptionService.getAllTravelOptions().subscribe({
      next: (options) => (this.travelOptions = options),
      error: (err) => console.error('Error loading travel options:', err)
    });
  }


}
