import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsCounterComponent } from './stats-counter.component';
import { configureTestingModule } from '../shared/test-utils/test-utils';

describe('StatsCounterComponent', () => {
   let component: StatsCounterComponent;
    let fixture;
  
    beforeEach(async () => {
      await configureTestingModule([StatsCounterComponent]); // just sets up TestBed
      fixture = TestBed.createComponent(StatsCounterComponent); // create fixture manually
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
