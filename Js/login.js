//listen for state change - main method
firebase.auth().onAuthStateChanged(function (user) {
    var link = window.location.href;
    if (user) {

        if (link.includes('index.html')) {
            document.location = 'home.thml';
        }

    } else {

        if (link.includes('home.html')) {

            document.location = 'index.html';
        }
    }

});