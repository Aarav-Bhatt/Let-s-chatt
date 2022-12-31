var firebaseConfig = {
    apiKey: "AIzaSyDgjikGgv423uqzYHcoxTrng-fwN3fqiwg",
    authDomain: "let-schat-ddea6.firebaseapp.com",
    databaseURL:"https://let-schat-ddea6-default-rtdb.firebaseio.com",
    projectId: "let-schat-ddea6",
    storageBucket:"let-schat-ddea6.appspot.com",
    messagingSenderId: "824997109927",
    appId: "1:824997109927:web:0b6d656e22b1e66083fb82"
  };
 // Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");



document.getElementById("wlcm").innerHTML="welcome"+user_name;


function addroom() {
  room_name=document.getElementById("roomname").value ;
  firebase.database().ref("/").child(room_name).update({
    pupose: "adding roomname"
   });

   localStorage.setItem("roomname",room_name)

}
function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("emptydiv").innerHTML = "";
    snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("emptydiv").innerHTML += row;
    });
  });
}

getData();

function redirectToRoomName(Name) {
  localStorage.setItem("roomname",Name);
  window.location="game.html";

}

function logout(){
  localStorage.removeItem("username");
  localStorage.removeItem("roomname");
  window.location="index.html"
}
