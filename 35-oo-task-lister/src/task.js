const Task = (function() {
  let taskCounter = 0
  let tasks = []
  return class Task {
    constructor(description, priority, listId) {
      this.description = description
      this.priority = priority
      this.listId = listId
      this.id = ++taskCounter
      tasks.push(this)
    }

    static all() {
      return Array.from(tasks)
    }

    static taskForListId(id) {
      return this.all().filter(taskObj => taskObj.listId === id)
    }

    static deleteTasksAssociatedToListId(id) {
      tasks = tasks.filter(taskObj => taskObj.listId !== id)
    }

    static deleteTask(id) {
      tasks = tasks.filter(taskObj => taskObj.id !== id)
    }

    toHTML() {
      return TaskListerViews.taskHTML(this)
    }
  }
})()