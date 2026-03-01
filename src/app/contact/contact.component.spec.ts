import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponent } from './contact.component';
import { configureTestingModule } from '../shared/test-utils/test-utils';

describe('ContactComponent', () => {
   let component: ContactComponent;
    let fixture;
  
    beforeEach(async () => {
      await configureTestingModule([ContactComponent]); // just sets up TestBed
      fixture = TestBed.createComponent(ContactComponent); // create fixture manually
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
