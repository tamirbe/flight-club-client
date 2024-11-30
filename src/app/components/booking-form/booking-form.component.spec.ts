import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BookingFormComponent } from './booking-form.component';

describe('BookingFormComponent', () => {
  let component: BookingFormComponent;
  let fixture: ComponentFixture<BookingFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [BookingFormComponent],
    });
    fixture = TestBed.createComponent(BookingFormComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should emit booking data on valid form submission', () => {
    spyOn(component.onBookFlight, 'emit');
    component.bookingForm.setValue({
      name: 'John Doe',
      email: 'john@example.com',
      contactNumber: '1234567890',
    });

    component.onBook();
    expect(component.onBookFlight.emit).toHaveBeenCalledWith(component.bookingForm.value);
  });
  
});
