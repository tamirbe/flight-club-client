import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.scss']
})
export class BookingFormComponent {
  @Input() flight: any;
  @Output() onBookFlight = new EventEmitter<void>(); 
  bookingForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.bookingForm = this.fb.group({
      name: [''],
      email: [''],
      contactNumber: ['']
    });
  }

  onBook() {
    if (this.bookingForm.valid) {
      this.onBookFlight.emit(this.bookingForm.value);
    }
  }
}
