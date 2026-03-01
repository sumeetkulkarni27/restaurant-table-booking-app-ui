import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { AboutComponent } from '../about/about.component';
import { configureTestingModule } from '../shared/test-utils/test-utils';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
   let fixture;
 
   beforeEach(async () => {
     await configureTestingModule([HeaderComponent]); // just sets up TestBed
     fixture = TestBed.createComponent(HeaderComponent); // create fixture manually
     component = fixture.componentInstance;
     fixture.detectChanges();
   });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
