function render(data){
    var render = $("<div id='top'><p>"+data+"</p></div>");
    $("#mainComp").html("");
    $("#mainComp").append(render);
}


function Register(){
    var userEmail = $("<input type='text' style='margin-top:20%;' class='email' name='Username' id='usernameInput' placeholder='Email'  required>");
    var userPass = $("<input type='password' class='pass' name='Username' id='usernamePassword' placeholder='Password*'' required>");
    var location  = $("<input type='text' class='loc' name='Username' id='usernamePassword' placeholder='Location*'' required>");
    var options = $("<select class='user' id='usernamePassword'><option selected></option><option>Guardian</option><option>Valuator</option><option>Host</option></select>");
    var button = $("<button onclick='CreateUser()' >Register</button>");
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
        firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function (error) {
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


function checkUserPass(){
    var userMobile = $("#usernameInput").val();
    var userpass = $("#usernamePassword").val();

    if(userMobile == "" || userpass == ""){
        alert("");
    }else{


    }

}
