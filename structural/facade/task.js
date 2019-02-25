class Task {
  constructor(data){
    this.name = data.name;
    this.priority = data.priority;
    this.completed = data.completed || false;
  }
}

const TaskServices = (
  () => {
    return {
      complete: (Task) => {
        Task.completed = true;
        console.log('Mission completed:', Task);
      },
      save: (Task) => {
        console.log('Task saved:', Task)
      }
    }
  }
)();

const TaskServicesFacade = (
  () => {
    const complete = (Task) => {
      TaskServices.complete(Task)
      if (Task.completed) {
        TaskServices.save(Task);
      }
    }
    return {
      completeMethod: complete
    }
  }
)();

module.exports = {
  Task,
  TaskServicesFacade
};