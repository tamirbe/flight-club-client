import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { FlightSearchComponent } from './flight-search.component';
import { By } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Add this import

describe('FlightSearchComponent', () => {
  let component: FlightSearchComponent;
  let fixture: ComponentFixture<FlightSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlightSearchComponent],
      imports: [
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule // Add this to enable animations
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(FlightSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form with default values', () => {
    expect(component.searchForm.value).toEqual({
      departureCity: '',
      destinationCity: '',
      departureDate: '',
      returnDate: '',
      passengers: 1,
    });
  });

  it('should emit search data on valid form submission', () => {
    spyOn(component.search, 'emit');
    component.searchForm.setValue({
      departureCity: 'New York',
      destinationCity: 'Los Angeles',
      departureDate: '2024-12-01',
      returnDate: '2024-12-15',
      passengers: 2,
    });
    component.onSearch();
    expect(component.search.emit).toHaveBeenCalledWith({
      departureCity: 'New York',
      destinationCity: 'Los Angeles',
      departureDate: '2024-12-01',
      returnDate: '2024-12-15',
      passengers: 2,
    });
  });

  it('should not emit search data if the form is invalid', () => {
    spyOn(component.search, 'emit');
    component.searchForm.patchValue({ departureCity: '', destinationCity: 'Los Angeles' });
    component.onSearch();
    expect(component.search.emit).not.toHaveBeenCalled();
  });
});
