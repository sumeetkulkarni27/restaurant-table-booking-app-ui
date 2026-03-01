import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';
import { configureTestingModule } from '../shared/test-utils/test-utils';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture;

  beforeEach(async () => {
    await configureTestingModule([AboutComponent]); // just sets up TestBed
    fixture = TestBed.createComponent(AboutComponent); // create fixture manually
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
