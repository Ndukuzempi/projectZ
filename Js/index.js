function render(data){
    var render = $("<div id='top'><p>"+data+"</p></div>");
    $("#mainComp").html("");
    $("#mainComp").append(render);
}


function Register(){
    var userEmail = $("<input type='text' style='margin-top:35%;' class='email' name='Username' id='usernameInput' placeholder='Email'  required>");
    var userPass = $("<input type='password' class='pass' name='Username' id='usernamePassword' placeholder='Password*'' required>");
    var location  = $("<input type='text' class='loc' name='Username' id='usernamePassword' placeholder='Location*'' required>");
    var options = $("<select class='user' id='usernamePassword'><option>Guardian</option><option>Valuator</option><option>Host</option></select>");
    var button = $("<button onsubmit='CreateUser()' >Login</button>");
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
    

}


function checkUserPass(){
    var userMobile = $("#usernameInput").val();
    var userpass = $("#usernamePassword").val();

    if(userMobile == "" || userpass == ""){
        alert("");
    }

}