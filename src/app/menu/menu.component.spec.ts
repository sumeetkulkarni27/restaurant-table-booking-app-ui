import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuComponent } from './menu.component';
import { configureTestingModule } from '../shared/test-utils/test-utils';

describe('MenuComponent', () => {
   let component: MenuComponent;
    let fixture;
  
    beforeEach(async () => {
      await configureTestingModule([MenuComponent]); // just sets up TestBed
      fixture = TestBed.createComponent(MenuComponent); // create fixture manually
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
