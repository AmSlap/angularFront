import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelOptionComponent } from './travel-option.component';

describe('TravelOptionComponent', () => {
  let component: TravelOptionComponent;
  let fixture: ComponentFixture<TravelOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TravelOptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TravelOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
