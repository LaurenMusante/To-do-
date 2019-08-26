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
    $("div.toDo").append("<p><input type='checkbox'>" + task.task + "</p>");
  });
  $("form").submit(function(event){
    event.preventDefault();
    var userInput = $("input[type=text]").val();
    var userTask = new Task("today", userInput, "due date");
    toDo.addTask(userTask);
    console.log(toDo);
    $("div.toDo").append("<p><input type='checkbox'>" + userTask.task + "</p>");
    $("div.toDo").show();
  })
});
