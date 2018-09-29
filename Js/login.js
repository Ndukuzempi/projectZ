//listen for state change - main method
<<<<<<< HEAD


=======
>>>>>>> 28d4b5bd5e0bd82125ff6b5640183534e7824837
firebase.auth().onAuthStateChanged(function (user) {
    var link = window.location.href;
    if (user) {

        if (link.includes('index.html')) {
<<<<<<< HEAD
            document.location = 'home.thml';
        }

=======
            var id = user.uid;
            var email = user.email;
            var location = localStorage.getItem("location");
            var userType = localStorage.getItem("userType");


            if (userType == "Guardian") {
                firebase.database().ref().child("Guardian").child(id).child("id").set(id);
                firebase.database().ref().child("Guardian").child(id).child("email").set(email);
                firebase.database().ref().child("Guardian").child(id).child("location").set(location);
            } else if (userType == "Valuator") {
                firebase.database().ref().child("Valuator").child(id).child("id").set(id);
                firebase.database().ref().child("Valuator").child(id).child("email").set(email);
                firebase.database().ref().child("Valuator").child(id).child("location").set(location);
            } else {
                firebase.database().ref().child("Host").child(id).child("id").set(id);
                firebase.database().ref().child("Host").child(id).child("email").set(email);
                firebase.database().ref().child("Host").child(id).child("location").set(location);
            }


        }


>>>>>>> 28d4b5bd5e0bd82125ff6b5640183534e7824837
    } else {

        if (link.includes('home.html')) {

            document.location = 'index.html';
        }
    }

<<<<<<< HEAD
    
=======

>>>>>>> 28d4b5bd5e0bd82125ff6b5640183534e7824837

});