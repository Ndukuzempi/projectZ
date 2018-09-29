function render(data){
    var render = $("<div id='top'><p>"+data+"</p></div>");
    $("#mainComp").html("");
    $("#mainComp").append(render);
}


function checkUserPass(){
    var userMobile = $("#usernameInput").val();
    var userpass = $("#usernamePassword").val();
    var prompt = document.getElementById("prompt");
    
   firebase.auth().signInWithEmailAndPassword(userMobile, userpass)
    .catch(
        function(error){
            var errorMessage = error
            .errorMessage;
            var errorCode = error.errorCode;
            prompt.innerHTML = errorMessage;
            $("#prompt").show();
        })
}

