
import firebase from "firebase/app";
import "firebase/firestore"
import "firebase/auth"
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyBUZYRJLH-W4LjqH9LwBJpNg4ETRdCAHAA",
    authDomain: "blogapp-5af14.firebaseapp.com",
    databaseURL: "https://blogapp-5af14.firebaseio.com",
    projectId: "blogapp-5af14",
    storageBucket: "blogapp-5af14.appspot.com",
    messagingSenderId: "863772107861",
    appId: "1:863772107861:web:a09d014148fef6868960dc",
    measurementId: "G-ZY9QHCWE42"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
 export const firestore=firebase.firestore();
export const auth=firebase.auth();

export default firebase;



