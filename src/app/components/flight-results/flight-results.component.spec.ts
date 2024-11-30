import { TestBed, ComponentFixture } from '@angular/core/testing';
import { FlightResultsComponent } from './flight-results.component';

describe('FlightResultsComponent', () => {
  let component: FlightResultsComponent;
  let fixture: ComponentFixture<FlightResultsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlightResultsComponent],
    });
    fixture = TestBed.createComponent(FlightResultsComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should emit selected flight', () => {
    spyOn(component.flightSelected, 'emit');
    const flight = { airline: 'Airline A', flightNumber: 'AA123', price: 200 } as any;

    component.selectFlight(flight);
    expect(component.flightSelected.emit).toHaveBeenCalledWith(flight);
  });
});
