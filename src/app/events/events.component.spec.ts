import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsComponent } from './events.component';
import { configureTestingModule } from '../shared/test-utils/test-utils';

describe('EventsComponent', () => {
   let component: EventsComponent;
    let fixture;
  
    beforeEach(async () => {
      await configureTestingModule([EventsComponent]); // just sets up TestBed
      fixture = TestBed.createComponent(EventsComponent); // create fixture manually
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
