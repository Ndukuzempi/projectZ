function CreateUser(){
    var userEmail = $('.email').val();
    var userPass= $('.pass').val();
    var location = $(".loc").val();
    var userType = $(".user").val();
    var SName = $(".SName").val();
    var Name = $(".Name").val();
    
    if(userEmail == "" || userPass == "" || location == "" || userType == "" || SName == "" || Name == ""){
       document.getElementById("prompt").innerHTML = "Please fill in all required fields";
       $("#prompt").show();
    }else{
        $("#prompt").hide();
        
        firebase.auth().createUserWithEmailAndPassword(userEmail, userPass)
        .then(function(response)
        {
            var userId = response.user.uid;
            firebase.database().ref().child(userType).child(userId).child("Id").set(userId);
            firebase.database().ref().child(userType).child(userId).child("Email").set(userEmail);
            firebase.database().ref().child(userType).child(userId).child("location").set(location);
            firebase.database().ref().child(userType).child(userId).child("Name").set(Name);
            firebase.database().ref().child(userType).child(userId).child("SName").set(SName);
            firebase.database().ref().child(userType).child(userId).child("Type").set(userType);
            
            $('.email').val('');
            $('.pass').val('');
            $(".loc").val('');
            $(".user").val('');
            $(".SName").val('');
            $(".Name").val('');
            $("#prompt").show();
            $("#loginBtn").hide();
            $("#loginOverlay").append("<button onclick='out()'  id='loginBtn'>Register</button>");
            document.getElementById("prompt").innerHTML = "Account successfuly created, click on button to login";
            firebase.auth().signOut().then(function() {
                // Sign-out successful.
               
              }).catch(function(error) {
                // An error happened.
              });
        })
        .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
    
    
            var Prompt = document.getElementById('prompt');
            Prompt.style.display = 'block';
            Prompt.innerHTML = errorMessage;
            document.location = '/'    

            // ...
        });
       
    }

}


function out(){
    document.location = 'index.html';
}