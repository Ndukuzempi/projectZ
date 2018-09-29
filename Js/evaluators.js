getEvaluators();
function getEvaluators()
{    
   var database = firebase.database().ref('Valuator');
    //var userId = getEvaluatorsByGuardianId(guardianId)
    var arrObj = [];
    database.on('child_added', function(data){
        var list = data.val();
        arrObj.push(list)      
           
        console.log(data.key);
     });
}