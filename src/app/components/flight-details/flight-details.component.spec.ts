import { TestBed, ComponentFixture } from '@angular/core/testing';
import { FlightDetailsComponent } from './flight-details.component';

describe('FlightDetailsComponent', () => {
  let component: FlightDetailsComponent;
  let fixture: ComponentFixture<FlightDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlightDetailsComponent],
    });
    fixture = TestBed.createComponent(FlightDetailsComponent);
    component = fixture.componentInstance;
    component.flight = { airline: 'Airline A', flightNumber: 'AA123', price: 200 } as any;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should emit proceed to booking event', () => {
    spyOn(component.proceedToBooking, 'emit');

    component.onBook();
    expect(component.proceedToBooking.emit).toHaveBeenCalled();
  });
});
