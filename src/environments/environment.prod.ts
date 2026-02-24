import { EnvironmentConfiguration } from "../app/models/environment-configuration";


const serverUrl='https://lsc-table-booking-app-api.azurewebsites.net/api';


// The list of file replacements can be found in `angular.json`.
export const environment: EnvironmentConfiguration = {
  env_name: 'prod',
  production: true,
  apiUrl: serverUrl,
  apiEndpoints: {
    getRestaurants:'Restaurant/restaurants',
    getRestaurantBranches:'Restaurant/branches',
    getDiningTables:'Restaurant/diningtables',
    updateReservation:'Reservation/CheckIn',
    saveReservation:'Restaurant',
    getReservationDetails:'Reservation/getreservations'
  },
  adb2cConfig: {
    clientId: '58273938-f69c-4b5f-968d-9e28a008f049',
    readScopeUrl: 'api://ce8c252c-6999-424b-af71-26f278522bd3/Booking.Read',
    writeScopeUrl: 'api://ce8c252c-6999-424b-af71-26f278522bd3/Booking.Write',
    apiEndpointUrl: 'https://localhost:7195/api/Reservation'
  },
  cacheTimeInMinutes: 30,
};