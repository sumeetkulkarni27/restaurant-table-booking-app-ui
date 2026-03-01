import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefsComponent } from './chefs.component';
import { configureTestingModule } from '../shared/test-utils/test-utils';

describe('ChefsComponent', () => {
   let component: ChefsComponent;
    let fixture;
  
    beforeEach(async () => {
      await configureTestingModule([ChefsComponent]); // just sets up TestBed
      fixture = TestBed.createComponent(ChefsComponent); // create fixture manually
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
