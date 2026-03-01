import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialComponent } from './testimonial.component';
import { AboutComponent } from '../about/about.component';
import { configureTestingModule } from '../shared/test-utils/test-utils';

describe('TestimonialComponent', () => {
   let component: TestimonialComponent;
    let fixture;
  
    beforeEach(async () => {
      await configureTestingModule([TestimonialComponent]); // just sets up TestBed
      fixture = TestBed.createComponent(TestimonialComponent); // create fixture manually
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
