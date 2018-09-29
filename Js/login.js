firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in.
    if (window.location.href.includes("index.html")) {
      document.location = 'home.html';
    } else if (window.location.href.includes("home.html")) {
      var userId = firebase.auth().currentUser.uid;
      console.log(userId);
      var database = firebase.database().ref();

      database.on('child_added', (data) => {

        var userType = data.child(userId).child("Type").val();
        var id = data.child(userId).child("Id").val();
        console.log(userType);

        if (userType == "Valuator" && userId == id) {
          $("#tab1").hide();
          console.log("mathc");
        }

      });

    }

  } else {
    // No user is signed in.
    var a = window.location.href.includes("index.html");
    var b = window.location.href.includes("register.html");
    if (a == false && b == false) {
      document.location = 'index.html';
    }

  }
});