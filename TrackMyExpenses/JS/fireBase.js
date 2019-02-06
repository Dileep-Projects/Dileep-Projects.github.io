
var app_fireBase = {};
(function(){
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyApacCybPMy5H6Gxwo97bKuHNUUc5k39PE",
    authDomain: "track-my-expenses-de.firebaseapp.com",
    databaseURL: "https://track-my-expenses-de.firebaseio.com",
    projectId: "track-my-expenses-de",
    storageBucket: "track-my-expenses-de.appspot.com",
    messagingSenderId: "551694940776"
  };
  firebase.initializeApp(config);
  app_fireBase = firebase;
})()