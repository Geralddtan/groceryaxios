import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBU0zmE3c0y310XimNMJlrmd7E-j3j-QKM",
    authDomain: "bt3103-week-10-grocery-axios.firebaseapp.com",
    databaseURL: "https://bt3103-week-10-grocery-axios.firebaseio.com",
    projectId: "bt3103-week-10-grocery-axios",
    storageBucket: "bt3103-week-10-grocery-axios.appspot.com",
    messagingSenderId: "86771440937",
    appId: "1:86771440937:web:033e2d8ee9937d26612b38",
    measurementId: "G-PWXF99NYWG"
};

firebase.initializeApp(firebaseConfig);
var database = firebase.firestore();
export default database;