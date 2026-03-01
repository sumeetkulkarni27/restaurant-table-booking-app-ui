import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';
import { configureTestingModule } from '../shared/test-utils/test-utils';

describe('FooterComponent', () => {
   let component: FooterComponent;
    let fixture;
  
    beforeEach(async () => {
      await configureTestingModule([FooterComponent]); // just sets up TestBed
      fixture = TestBed.createComponent(FooterComponent); // create fixture manually
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
