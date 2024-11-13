import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

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
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {


  constructor(private http: HttpClient) { }

  // Explicitly type the flights array with the Flight interface
  
  noData = false;
  flights: Flight[] = [];
  selectedFlight: Flight | null = null;  // Holds the flight selected by the user
  bookingFlight: boolean = false;  // Flag to toggle the booking form
  private apiUrl = 'http://localhost:5000'; 

  // This function would handle the search form submission event to load flights
  onFlightSearch(searchData: any) {
    const url = `${this.apiUrl}/api/flights/search`;
    this.http.post<Flight[]>(url, searchData)
      .subscribe(
        (data) => {
          if(data.length>0){
            this.flights = data;
            this.selectedFlight = null;
            this.bookingFlight = false;
          }
          else{
            this.noData = true;
          }
        },
        (error) => {
          console.error('Error fetching flights:', error);
        }
      );
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

  onBooking(bookingData: any){
    const url = `${this.apiUrl}/api/flights/bookings`;
    this.http.post(url, bookingData)
      .subscribe(response => {
        console.log('Booking successful:', response);
      }
      );
  }
}
