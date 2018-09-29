function addEvaluators(guardianId)
{    
    loadfirebase();

    var database = firebase.database().ref().child("guardian").child("100");
    //var userId = getEvaluatorsByGuardianId(guardianId)

    database.on('value', function(data){
        var name = data.child("name").val();
        console.log(name);
     });
}
function loadfirebase()
{
    var config = {
        apiKey: "AIzaSyDgN9tdNaJh0SFe71rZXT5zC4ixLWfSuQ0",
        authDomain: "proj-3e49b.firebaseapp.com",
        databaseURL: "https://proj-3e49b.firebaseio.com",
        projectId: "proj-3e49b",
        storageBucket: "proj-3e49b.appspot.com",
        messagingSenderId: "512818315638"
    };
    firebase.initializeApp(config);
}