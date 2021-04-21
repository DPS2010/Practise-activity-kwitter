var firebaseConfig = {
    apiKey: "AIzaSyBtpqYMZz5erD8r8iWLrLN_lynYme1OPuo",
    authDomain: "kwitter-8d505.firebaseapp.com",
    databaseURL: "https://kwitter-8d505-default-rtdb.firebaseio.com",
    projectId: "kwitter-8d505",
    storageBucket: "kwitter-8d505.appspot.com",
    messagingSenderId: "356169235983",
    appId: "1:356169235983:web:b7ef7800fa0f7877b6ad7a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS
function Adduser () {
    user_name =document.getElementById("nameinput").value
firebase.database().ref("/").child(user_name).update ({
    Username : user_name
})
}
function Sendmessage () {
    message = document.getElementById("message").value
    firebase.database().ref(user_name).push ({
        Message : message
    })
}