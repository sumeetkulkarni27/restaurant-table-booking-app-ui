import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyUsComponent } from './why-us.component';
import { AboutComponent } from '../about/about.component';
import { configureTestingModule } from '../shared/test-utils/test-utils';

describe('WhyUsComponent', () => {
  let component: WhyUsComponent;
  let fixture;

  beforeEach(async () => {
    await configureTestingModule([WhyUsComponent]); // just sets up TestBed
    fixture = TestBed.createComponent(WhyUsComponent); // create fixture manually
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
