import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundamentalComponent } from './fundamental.component';
import { configureTestingModule } from '../shared/test-utils/test-utils';

describe('FundamentalComponent', () => {
   let component: FundamentalComponent;
    let fixture;
  
    beforeEach(async () => {
      await configureTestingModule([FundamentalComponent]); // just sets up TestBed
      fixture = TestBed.createComponent(FundamentalComponent); // create fixture manually
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
