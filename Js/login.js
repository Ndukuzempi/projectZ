firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      if(window.location.href.includes("index.html")){
        document.location = 'home.html';
      }else if(window.location.href.includes("main.html")) {
        var userId = firebase.auth().currentUser.uid;
        var database = firebase.database().ref();

        database.on('child_added', (data)=> {
          userId.on('value', (user)=>{
            var userType = data.child(user.val()).child("Type").val();
            console.log(userType);
          });
        });

      }
        
    } else {
      // No user is signed in.

      
    }
  });