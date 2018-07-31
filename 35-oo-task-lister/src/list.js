const List = (function () {
  let listCounter = 0
  let lists = []

  return class List {
    constructor(name) {
      this.name = name
      this.id = ++listCounter
      lists.push(this)
    }

    static all() {
      return [...lists]
    }

    static createNewTask() {
      new Task()
    }

    static destroyList(id) {
      Task.destroyTaskAssociatedToListId(id)
      lists = lists.filter(listObj => listObj.id !== parseInt(id))
    }

    ownTasks() {
      return Task.all().filter(taskObj => taskObj.listId === this.id)
    }

    ownTasksHTML() {
      return this.ownTasks().map(taskOBj => taskOBj.toHTML()).join('')
    }

    toHTML() {
      return `
              <div>
                <h2>${this.name}
                  <button data-action='delete-list' data-list-id='${this.id}' class="delete-list">
                    X
                  </button>
                </h2>
                <ul>
                  ${this.ownTasksHTML()}
                </ul>
              </div>
             `
    }
  }
})()