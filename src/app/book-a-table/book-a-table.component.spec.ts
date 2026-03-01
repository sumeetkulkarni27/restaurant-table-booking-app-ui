import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookATableComponent } from './book-a-table.component';
import { configureTestingModule } from '../shared/test-utils/test-utils';

describe('BookATableComponent', () => {
  let component: BookATableComponent;
   let fixture;
 
   beforeEach(async () => {
     await configureTestingModule([BookATableComponent]); // just sets up TestBed
     fixture = TestBed.createComponent(BookATableComponent); // create fixture manually
     component = fixture.componentInstance;
     fixture.detectChanges();
   });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
