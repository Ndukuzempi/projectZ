//listen for state change - main method
firebase.auth().onAuthStateChanged(function (user) {
    var link = window.location.href;
    if (user) {

        if (link.includes('index.html')) {
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


    } else {

        if (link.includes('home.html')) {

            document.location = 'index.html';
        }
    }



});