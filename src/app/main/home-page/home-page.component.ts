import { Component } from '@angular/core';

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
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  // Explicitly type the flights array with the Flight interface
  flights: Flight[] = [];
  selectedFlight: Flight | null = null;  // Holds the flight selected by the user
  bookingFlight: boolean = false;  // Flag to toggle the booking form

  // This function would handle the search form submission event to load flights
  onFlightSearch(searchData: any) {
    // Populate flights with mock data (using the Flight interface structure)
    this.flights = [
      {
        airline: 'Airline A',
        departureCity: searchData.departureCity,
        destinationCity: searchData.destinationCity,
        departureDate: searchData.departureDate,
        returnDate: searchData.returnDate,
        passengers: searchData.passengers,
        departureTime: '08:00 AM',
        arrivalTime: '10:00 AM',
        duration: '2h',
        price: 120,
        baggageAllowance: '15 kg'
      },
      {
        airline: 'Airline B',
        departureCity: searchData.departureCity,
        destinationCity: searchData.destinationCity,
        departureDate: searchData.departureDate,
        returnDate: searchData.returnDate,
        passengers: searchData.passengers,
        departureTime: '01:00 PM',
        arrivalTime: '03:00 PM',
        duration: '2h',
        price: 150,
        baggageAllowance: '20 kg'
      },
      {
        airline: 'Airline C',
        departureCity: searchData.departureCity,
        destinationCity: searchData.destinationCity,
        departureDate: searchData.departureDate,
        returnDate: searchData.returnDate,
        passengers: searchData.passengers,
        departureTime: '01:00 PM',
        arrivalTime: '03:00 PM',
        duration: '2h',
        price: 190,
        baggageAllowance: '25 kg'
      }
    ];
    this.selectedFlight = null;  // Reset selected flight
    this.bookingFlight = false;  // Reset booking flag
  }

  // This function is triggered when a flight is selected in the results component
  onFlightSelect(flight: Flight) {
    this.selectedFlight = flight;
    this.bookingFlight = false;  // Ensure booking form is hidden
  }

  // This function is triggered to proceed with booking the selected flight
  onProceedToBooking() {
    this.bookingFlight = true;
  }
}
