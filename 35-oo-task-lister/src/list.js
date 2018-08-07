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
      return Array.from(lists)
    }

    static deleteListWithId(id) {
      lists = lists.filter(listObj => listObj.id !== id)
      Task.deleteTasksAssociatedToListId(id)
    }

    tasks() {
      return Task.taskForListId(this.id)
    }

    toHTML() {
      return TaskListerViews.allLists(this.all())
    }
  }
})()
