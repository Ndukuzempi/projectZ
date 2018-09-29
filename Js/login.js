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
        console.log(userType);

        if(userType == "Valuator"){
          $("#tab1").hide();
        }

      });

    }

  } else {
    // No user is signed in.


  }
});