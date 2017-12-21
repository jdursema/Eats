import firebase from 'firebase';

  const config = {
    apiKey: "AIzaSyCP1rVVALTveDgxmRM9ocBpE3F8RuDtVcg",
    authDomain: "eats-8733e.firebaseapp.com",
    databaseURL: "https://eats-8733e.firebaseio.com",
    projectId: "eats-8733e",
    storageBucket: "eats-8733e.appspot.com",
    messagingSenderId: "586807236791"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const db = firebase.database();
  export default firebase;
