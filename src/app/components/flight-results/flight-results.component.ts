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
  selector: 'app-flight-results',
  templateUrl: './flight-results.component.html',
  styleUrls: ['./flight-results.component.scss']
})
export class FlightResultsComponent {
  @Input() flights: Flight[] = [];
  @Output() flightSelected = new EventEmitter<Flight>();

  selectFlight(flight: Flight) {
    this.flightSelected.emit(flight);
  }
}
