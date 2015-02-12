
var host = "http://127.0.0.1:5000/"
test = function()
{
    console.log("bonjour");
}

getTasks = function() {
    var request = $.ajax({
        url: host + "tasks",
        type: "GET"
    }).done(function (msg) {
          console.log(msg);
        //console.log("ok");
    }).fail(function () {
            alert("error");
        });
}

addTask = function(task)
{
    var newTask = {
        task : task
    }

    console.log(JSON.stringify(newTask));
    var request = $.ajax({
        url: host + "tasks",
        type: "POST",
        dataType : "json",
        contentType : "application/json",
        data : JSON.stringify(newTask)
    }).done(function (msg) {

        console.log("ok");
    }).fail(function () {
        alert("error");
    });

}