const { Task, TaskServicesFacade } = require('./task');

const someTask = new Task({
  name: 'Some task',
  priority: 1,
})

// TaskServices.complete(someTask);

// if(someTask.completed) {
//   TaskServices.save(someTask);
// }

TaskServicesFacade.completeMethod(someTask);


console.log(someTask)