import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationDetailsComponent } from './reservation-details.component';
import { AboutComponent } from '../about/about.component';
import { configureTestingModule } from '../shared/test-utils/test-utils';

describe('ReservationDetailsComponent', () => {
   let component: ReservationDetailsComponent;
    let fixture;
  
    beforeEach(async () => {
      await configureTestingModule([ReservationDetailsComponent]); // just sets up TestBed
      fixture = TestBed.createComponent(ReservationDetailsComponent); // create fixture manually
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
