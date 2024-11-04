import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.scss']
})
export class FlightSearchComponent {
  @Output() search = new EventEmitter<any>();  // Emit search data to parent
  searchForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      departureCity: [''],
      destinationCity: [''],
      departureDate: [''],
      returnDate: [''],
      passengers: [1]
    });
  }

  onSearch() {
    if (this.searchForm.valid) {
      this.search.emit(this.searchForm.value);
    }
  }
}
