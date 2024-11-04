import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.scss']
})
export class BookingFormComponent {
  @Input() flight: any;
  bookingForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.bookingForm = this.fb.group({
      name: [''],
      email: [''],
      contactNumber: ['']
    });
  }

  onBook() {
    const bookingData = this.bookingForm.value;
    console.log('Booking flight with details:', bookingData);
    // Add booking logic here
  }
}
