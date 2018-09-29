function render(data){
    var render = $("<div id='top'><p>"+data+"</p></div>");
    $("#mainComp").html("");
    $("#mainComp").append(render);
}


function checkUserPass(){
    var userMobile = $("#usernameInput").val();
    var userpass = $("#usernamePassword").val();

    if(userMobile == "" || userpass == ""){
        alert("");
    }

}