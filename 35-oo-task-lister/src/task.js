const Task = (function() {
  let taskCounter = 0
  let tasks = []

  return class Task {
    constructor(description, priority, listId) {
      this.id = ++taskCounter
      this.description = description
      this.priority = priority
      this.listId = parseInt(listId)
      tasks.push(this)
    }

    static all() {
      return [...tasks]
    }

    static destroyTaskAssociatedToListId(id) {
      tasks = tasks.filter(taskObj => taskObj.listId !== parseInt(id))
    }

    static destroyTask(id) {
      tasks = tasks.filter(taskObj => taskObj.id !== parseInt(id))
    }

    toHTML() {
      return `
              <li>
                Task: ${this.description}
                <button data-action="delete-task" data-task-id="${this.id}" class="delete-task">
                X
                </button>
                <br>
                Priority:  ${this.priority}
              </li>
             `
    }
  }
})()