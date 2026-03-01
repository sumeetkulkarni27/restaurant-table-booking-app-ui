import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryComponent } from './gallery.component';
import { configureTestingModule } from '../shared/test-utils/test-utils';

describe('GalleryComponent', () => {
  let component: GalleryComponent;
   let fixture;
 
   beforeEach(async () => {
     await configureTestingModule([GalleryComponent]); // just sets up TestBed
     fixture = TestBed.createComponent(GalleryComponent); // create fixture manually
     component = fixture.componentInstance;
     fixture.detectChanges();
   });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
