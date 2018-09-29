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
                console.log(userType);
            } else if (userType == "Valuator") {
                firebase.database().ref().child("Valuator").child(id).child("id").set(id);
                firebase.database().ref().child("Valuator").child(id).child("email").set(email);
                firebase.database().ref().child("Valuator").child(id).child("location").set(location);
                console.log(userType);
            } else {
                firebase.database().ref().child("Host").child(id).child("id").set(id);
                firebase.database().ref().child("Host").child(id).child("email").set(email);
                firebase.database().ref().child("Host").child(id).child("location").set(location);
                console.log(userType);
            }

            document.location = 'home.html';


        }


    } else {

        if (link.includes('home.html')) {

            document.location = 'index.html';
        }
    }



});