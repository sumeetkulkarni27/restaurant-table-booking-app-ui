import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { configureTestingModule } from '../shared/test-utils/test-utils';

describe('HomeComponent', () => {
   let component: HomeComponent;
    let fixture;
  
    beforeEach(async () => {
      await configureTestingModule([HomeComponent]); // just sets up TestBed
      fixture = TestBed.createComponent(HomeComponent); // create fixture manually
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
