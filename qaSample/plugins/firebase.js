import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

export default (context, inject) => {
  let fireApp;
  if (!firebase.apps.length) {
    fireApp = firebase.initializeApp({
      apiKey: "AIzaSyANePz3vmmv7PUnD6qhfysakA0-myg3-V0",
      authDomain: "qa-sample-f7b18.firebaseapp.com",
      databaseURL: "https://qa-sample-f7b18.firebaseio.com",
      projectId: "qa-sample-f7b18",
      storageBucket: "qa-sample-f7b18.appspot.com",
      messagingSenderId: "324349901739",
      appId: "1:324349901739:web:5618dcb43382f0fa8db0ee"
    });
  } else {
    fireApp = firebase.app();
  }

  inject("fireApp", fireApp);
};
