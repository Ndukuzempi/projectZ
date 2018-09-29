firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      if(window.location.href.includes("index.html")){
        document.location = 'home.html';
      }
        
    } else {
      // No user is signed in.

      
    }
  });