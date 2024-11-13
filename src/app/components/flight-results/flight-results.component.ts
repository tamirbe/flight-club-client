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
