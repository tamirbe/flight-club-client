import { Component, Input, Output, EventEmitter } from '@angular/core';

interface Flight {
  airline: string;
  departureCity: string;
  destinationCity: string;
  departureDate: string;
  returnDate: string;
  passengers: number;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  price: number;
  baggageAllowance: string;
}

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.scss']
})
export class FlightDetailsComponent {
  @Input() flight!: Flight;  // Input flight data
  @Output() proceedToBooking = new EventEmitter<void>();  // Emit event when booking is initiated

  onBook() {
    this.proceedToBooking.emit();  // Emit the event when "Book" is clicked
  }
}
