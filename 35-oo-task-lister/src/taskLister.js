class TaskLister {
  static start(node) {
    this.rootHTMLNode = node
    this.bindEventListeners(node)
    this.render()
  }

  static bindEventListeners(node) {
    node.addEventListener('click',function(event) {
      event.preventDefault()
      this.handleEvent(event)

    }.bind(this))
  }

  static handleEvent(event) {
    if (event.target.dataset.action === 'create-new-list') {
      new List(document.getElementById('new-list-title').value)
      this.render()
    }

    if (event.target.dataset.action === 'create-new-task') {
      new Task(
        document.getElementById('new-task-description').value,
        document.getElementById('new-task-priority').value,
        document.getElementById('parent-list').value
      )
      this.render()
    }

    if (event.target.dataset.action === 'delete-list') {
      List.destroyList(event.target.dataset.listId)
      this.render()
    }

    if (event.target.dataset.action === 'delete-task') {
      Task.destroyTask(event.target.dataset.taskId)
      this.render()
    }
  }

  static lists() {
    return List.all()
  }

  static newListHTML() {
    return `<form id="create-list-form" action="#" method="post">
              <label for="new-list-title">Add a new list:</label>
              <input required type="text" id="new-list-title" name="new-list-title" placeholder="title">
              <input data-action="create-new-list" type="submit" value="Create New List">
            </form>`
  }

  static generateNewTaskHTMLForm() {
    return `
              <form id="create-task-form">
                <label for="parent-list">Select List:</label>
                <select id="parent-list">
                  <!-- Major key alert:
                  read the docs for HTML option selected:
                  https://www.w3schools.com/tags/att_option_selected.asp -->
                  ${this.lists().map(listObj => `<option value="${listObj.id}">${listObj.name}</option>`).join('')}
                </select>

                <label for="new-task-description">Task description:</label>
                <input required type="text" id="new-task-description" placeholder="description">

                <label for="new-task-priority">Priority level:</label>
                <input type="text" id="new-task-priority" placeholder="priority">
                <input data-action="create-new-task" type="submit" value="Create New Task">
              </form>
          `
  }

  static newTaskHTMLForm() {
    return this.lists().length ? this.generateNewTaskHTMLForm() : ''
  }

  static listsHTML() {
    return `<div id="lists">${List.all().map(listObj => listObj.toHTML()).join('')}</div>`
  }

  static toHTML() {
    return `${this.newListHTML()}${this.newTaskHTMLForm()}${this.listsHTML()}`
  }

  static render() {
    this.rootHTMLNode.innerHTML = this.toHTML()
  }
}