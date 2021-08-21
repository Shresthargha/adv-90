
var firebaseConfig = {
      apiKey: "AIzaSyBo7OX8ehGYgXecpYCpUchppzXUAdo6M_g",
      authDomain: "shresthargha-firebase-project.firebaseapp.com",
      databaseURL: "https://shresthargha-firebase-project-default-rtdb.firebaseio.com",
      projectId: "shresthargha-firebase-project",
      storageBucket: "shresthargha-firebase-project.appspot.com",
      messagingSenderId: "639215372958",
      appId: "1:639215372958:web:d9eadbf531da962463098f",
      measurementId: "G-Q82JNNCRJM"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
