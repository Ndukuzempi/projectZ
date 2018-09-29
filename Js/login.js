firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      if(window.location.href.includes("index.html")){
        document.location = 'home.html';
      }else if(window.location.href.includes("main.html")) {
        var userId = firebase.auth().currentUser.uid;
      }
        
    } else {
      // No user is signed in.

      
    }
  });