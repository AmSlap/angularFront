import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterUserTestComponent } from './register-user-test.component';

describe('RegisterUserTestComponent', () => {
  let component: RegisterUserTestComponent;
  let fixture: ComponentFixture<RegisterUserTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterUserTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterUserTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
