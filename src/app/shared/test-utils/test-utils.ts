import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MsalService, MSAL_GUARD_CONFIG, MsalGuard, MSAL_INSTANCE, MsalBroadcastService } from '@azure/msal-angular';
import { PublicClientApplication } from '@azure/msal-browser';
import { DatePipe } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';

export async function configureTestingModule(declarations: any[] = [], providers: any[] = []) {
  await TestBed.configureTestingModule({
    imports: [
      BrowserAnimationsModule,
      RouterTestingModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientTestingModule
    ],
    declarations,
    providers: [
      MsalBroadcastService,
      BsModalService,
      MsalService,
      MsalGuard,
      { provide: MSAL_GUARD_CONFIG, useValue: {} },
      { provide: MSAL_INSTANCE, useFactory: () => new PublicClientApplication({ auth: { clientId: 'test-id' } }) },
      {
        provide: ToastrService,
        useValue: {
          success: jasmine.createSpy('success'),
          error: jasmine.createSpy('error'),
          info: jasmine.createSpy('info'),
          warning: jasmine.createSpy('warning')
        }
      },
      DatePipe, // <--- add this
      ...providers
    ],
    schemas: [NO_ERRORS_SCHEMA]
  }).compileComponents();

  return TestBed.createComponent(declarations[0]);
}