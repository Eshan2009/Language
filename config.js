import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBv8XFUcaShnVidSSHcxJf82eeMzccvo_o",
  authDomain: "language-project-15105.firebaseapp.com",
  databaseURL: "https://language-project-15105-default-rtdb.firebaseio.com",
  projectId: "language-project-15105",
  storageBucket: "language-project-15105.appspot.com",
  messagingSenderId: "700365702264",
  appId: "1:700365702264:web:3b7977774b2243eb7f998d"
};

// Initialize Firebase

  firebase.initializeApp(firebaseConfig);


export default  firebase.database()