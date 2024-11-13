import { Component, Input, Output, EventEmitter } from '@angular/core';

interface Flight {
  airline: string;
  flightNumber: string;
  departureCity: string;
  destinationCity: string;
  departureDate: Date;
  returnDate: Date;
  passengers: number;
  price: number;
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
