function render(data){
    var render = $("<div id='top'><p>"+data+"</p></div>");
    $("#mainComp").html("");
    $("#mainComp").append(render);
}


<<<<<<< HEAD

=======
>>>>>>> 28d4b5bd5e0bd82125ff6b5640183534e7824837
function Register(){
    var userEmail = $("<input type='text' style='margin-top:20%;' class='email' name='Username' id='usernameInput' placeholder='Email'  required>");
    var userPass = $("<input type='password' class='pass' name='Username' id='usernamePassword' placeholder='Password*'' required>");
    var location  = $("<input type='text' class='loc' name='Username' id='usernamePassword' placeholder='Location*'' required>");
    var options = $("<select class='user' id='usernamePassword'><option selected></option><option>Guardian</option><option>Valuator</option><option>Host</option></select>");
<<<<<<< HEAD
    var button = $("<button onclick='CreateUser()' >Login</button>");
=======
    var button = $("<button onclick='CreateUser()' >Register</button>");
>>>>>>> 28d4b5bd5e0bd82125ff6b5640183534e7824837
    //
    $("#loginOverlay").html("");
    $("#loginOverlay").append(userEmail);
    $("#loginOverlay").append(userPass);
    $("#loginOverlay").append(location);
    $("#loginOverlay").append(options);
    $("#loginOverlay").append(options);
    $("#loginOverlay").append(button);

}


function CreateUser(){
    var userEmail = $('.email').val();
    var userPass= $('.pass').val();
    var location = $(".loc").val();
    var userType = $(".user").val();
    
    if(userEmail == "" || userPass == "" || location == "" || userType == ""){
       document.getElementById("prompt").innerHTML = "Please fill in all required fields";
       $("#prompt").show();
    }else{
        $("#prompt").hide();
        localStorage.setItem("location", location);
        localStorage.setItem("userType", userType);
<<<<<<< HEAD
        firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function (error) {
=======
        firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function (error) {
>>>>>>> 28d4b5bd5e0bd82125ff6b5640183534e7824837
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
    
    
            var Prompt = document.getElementById('prompt');
            Prompt.style.display = 'block';
            Prompt.innerHTML = errorMessage;
    

            // ...
        });
    }

}


<<<<<<< HEAD
=======
function checkUserPass(){
    var userMobile = $("#usernameInput").val();
    var userpass = $("#usernamePassword").val();

    if(userMobile == "" || userpass == ""){
        alert("");
    }else{


    }

}
>>>>>>> 28d4b5bd5e0bd82125ff6b5640183534e7824837
