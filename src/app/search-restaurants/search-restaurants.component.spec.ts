import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchRestaurantsComponent } from './search-restaurants.component';
import { configureTestingModule } from '../shared/test-utils/test-utils';

describe('SearchRestaurantsComponent', () => {
   let component: SearchRestaurantsComponent;
    let fixture;
  
    beforeEach(async () => {
      await configureTestingModule([SearchRestaurantsComponent]); // just sets up TestBed
      fixture = TestBed.createComponent(SearchRestaurantsComponent); // create fixture manually
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
