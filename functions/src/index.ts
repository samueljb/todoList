import * as functions from 'firebase-functions';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
    const id = request.query.questionaryId;
    console.log(id);
  
    response.send("Hello from Firebase!");
    response.json({'result': id});

});
