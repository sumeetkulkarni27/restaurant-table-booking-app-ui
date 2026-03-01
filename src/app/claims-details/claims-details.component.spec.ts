import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimsDetailsComponent } from './claims-details.component';
import { configureTestingModule } from '../shared/test-utils/test-utils';

describe('ClaimsDetailsComponent', () => {
   let component: ClaimsDetailsComponent;
    let fixture;
  
    beforeEach(async () => {
      await configureTestingModule([ClaimsDetailsComponent]); // just sets up TestBed
      fixture = TestBed.createComponent(ClaimsDetailsComponent  ); // create fixture manually
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
