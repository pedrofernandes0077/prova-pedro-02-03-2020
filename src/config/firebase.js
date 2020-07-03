import * as firebase from 'firebase';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "FÇLDSFDSKFOODSKFODSKFOKDSFDS",
    authDomain: "pedroprova-c36da.firebaseapp.com",
    databaseURL: "https://pedroprova-c36da.firebaseio.com",
    projectId: "pedroprova-c36da",
    storageBucket: "pedroprova-c36da.appspot.com",
    messagingSenderId: "54656432145356",
    appId: "1:12564654654654:web:546546546546546",
    measurementId: "B-FDSAFDSSADSA"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const database = firebase.firestore();
