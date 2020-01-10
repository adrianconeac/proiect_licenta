import Firebase from 'firebase';
let config = {
    apiKey: "AIzaSyCLlu2F3ODAM1u3MtH_LT9J-c6xlUNuro4",
    authDomain: "proiect-licenta-542a2.firebaseapp.com",
    databaseURL: "https://proiect-licenta-542a2.firebaseio.com",
    projectId: "proiect-licenta-542a2",
    storageBucket: "proiect-licenta-542a2.appspot.com",
};
let app = Firebase.initializeApp(config);
export const db = app.database();