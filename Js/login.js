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
        var name = data.child(userId).child("Name").val();
        var email = data.child(userId).child("Email").val();
        
        console.log(userType, name);

        if (userType == "Valuator" && userId == id) {
          
          $("#NameCont").html(name);
          $("#EmailCont").html(email);
          
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