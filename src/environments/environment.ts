// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.

import { EnvironmentConfiguration } from "../app/models/environment-configuration";



const localhostUrl = 'https://localhost:7195/api';
const serverUrl = 'https://lsc-table-booking-app-api.azurewebsites.net/api';

// The list of file replacements can be found in `angular.json`.
export const environment: EnvironmentConfiguration = {
  env_name: 'dev',
  production: false,
  apiUrl: localhostUrl,
  apiEndpoints: {
    getRestaurants: 'Restaurant/restaurants',
    getRestaurantBranches: 'Restaurant/branches',
    getDiningTables: 'Restaurant/diningtables',
    updateReservation: 'Reservation/CheckIn',
    saveReservation: 'Reservation',
    getReservationDetails:'Restaurant/getreservations'
  },
  adb2cConfig: {
    clientId: '58273938-f69c-4b5f-968d-9e28a008f049',
    readScopeUrl: 'api://ce8c252c-6999-424b-af71-26f278522bd3/Booking.Read',
    writeScopeUrl: 'api://ce8c252c-6999-424b-af71-26f278522bd3/Booking.Write',
    apiEndpointUrl: 'https://localhost:7195/api/Reservation'
  },
  cacheTimeInMinutes: 30,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
