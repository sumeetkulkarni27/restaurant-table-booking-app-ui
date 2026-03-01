import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectUserInfoComponent } from './collect-user-info.component';
import { AboutComponent } from '../about/about.component';
import { configureTestingModule } from '../shared/test-utils/test-utils';

describe('CollectUserInfoComponent', () => {
   let component: CollectUserInfoComponent;
    let fixture;
  
    beforeEach(async () => {
      await configureTestingModule([CollectUserInfoComponent]); // just sets up TestBed
      fixture = TestBed.createComponent(CollectUserInfoComponent); // create fixture manually
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
