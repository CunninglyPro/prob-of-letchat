var firebaseConfig = {
    apiKey: "AIzaSyD7XwEs0W9s6MZc-XWWg0DDwsQ9hRuYnLg",
    authDomain: "letchat-d90f2.firebaseapp.com",
    databaseURL: "https://letchat-d90f2-default-rtdb.firebaseio.com",
    projectId: "letchat-d90f2",
    storageBucket: "letchat-d90f2.appspot.com",
    messagingSenderId: "710094666170",
    appId: "1:710094666170:web:e2a93f6f2371d629874583"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addroom() {
    room_name = document.getElementById("add_room").value;

    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
}

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            //Start code

            console.log("Room name - " + Room_names);
            row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
            document.getElementById("output").innerHTML += row;

            //End code
        });
    });
}
getData();

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}