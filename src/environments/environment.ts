// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBUrm8iwgwDNkPlJHcWURutJdOpXqHdyfA',
    authDomain: 'todolist-62a58.firebaseapp.com',
    databaseURL: 'https://todolist-62a58.firebaseio.com',
    projectId: 'todolist-62a58',
    storageBucket: 'todolist-62a58.appspot.com',
    messagingSenderId: '834956103192',
    appId: '1:834956103192:web:0fd485b48d06d774'
  },
  serverGCF: {
    Url: 'https://us-central1-todolist-62a58.cloudfunctions.net/',
    sendIdToServer: 'https://us-central1-todolist-62a58.cloudfunctions.net/helloWorld'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 * -
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.