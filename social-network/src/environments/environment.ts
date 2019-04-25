// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase : {
    apiKey: "AIzaSyDv9ZlzYDwL5dKoV3fF-2r9RQCzHX1zhMg",
    authDomain: "angularpractice-7b693.firebaseapp.com",
    databaseURL: "https://angularpractice-7b693.firebaseio.com",
    projectId: "angularpractice-7b693",
    storageBucket: "angularpractice-7b693.appspot.com",
    messagingSenderId: "859016127883"
  },
  database : 'firebase',
  socialAuthEnabled : true
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
