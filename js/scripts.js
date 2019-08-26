function ToDo(){
  this.list = [];
}

function Task(dateCreated, task, dateDue){
  this.dateCreated = dateCreated;
  this.task = task;
  this.dateDue = dateDue;
  this.done = false;
}

ToDo.prototype.addTask = function(task){
  this.list.push(task);
  return this.list;
}

var toDo = new ToDo();

$(document).ready(function(event){
  toDo.list.forEach(function(task){
    $("div.toDo").append("<p><input type='checkbox'>" + task.task + " " + task.dateDue + "</p>");
  });
  $("form").submit(function(event){
    event.preventDefault();
    var today = new Date();
    var userInput = $("input[type=text]").val();
    var userDate = $("input[name=dateDue]").val();
    var userTask = new Task(today, userInput, userDate);
    toDo.addTask(userTask);
    console.log(toDo);
    $("div.toDo").append("<p><input type='checkbox'>" + userTask.task + " " + userTask.dateDue +"</p>");
    $("div.toDo").show();
  })
});
