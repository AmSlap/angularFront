import { Component, Input } from '@angular/core';
import { TravelOption } from '../models/travel-option.model';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-travel-option',
  imports: [RouterModule,CommonModule],
  template: `
    <Section class="listing">
<img class="listing-img" [src]="travelOption.img" alt="image of {{travelOption.name}}">
<h2 class="listing-name">{{travelOption.name}}</h2>
<h3 class="listing-type">{{travelOption.type}}</h3>
<b class="listing-price">{{travelOption.price}}</b><br/>
<a [routerLink]="['/details',travelOption.id]">view details</a>
</Section>


  `,
  styleUrl: './travel-option.component.css'
})
export class TravelOptionComponent {

  @Input() travelOption! : TravelOption;
}
