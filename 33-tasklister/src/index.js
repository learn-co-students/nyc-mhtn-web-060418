document.addEventListener('DOMContentLoaded', () => {
  let lists = []
  let tasks = []
  const appRoot = document.getElementById("app-content");
  const listNameInputField = document.getElementById('new-list-title')
  const newListSubmitButton = document.getElementById('new-list-submit-button')
  const htmlRootNode = document.getElementById('main-content')
  htmlRootNode.addEventListener('click',function(event) {
    if (event.target.dataset.action === 'create-new-list') {
      handleNewList(event)
    }
    if (event.target.dataset.action === 'create-new-task') {
      handleNewTask(event)
    }
    if (event.target.dataset.action === 'delete-task') {
      handleDeleteTask(event)
    }
    if (event.target.dataset.action === 'delete-list') {
      handleDeleteList(event)
    }
  })

  function handleDeleteList(event) {
    const listId = parseInt(event.target.dataset.listId)
    deleteList(listId)
    console.log(lists,tasks)
    renderApp()
  }

  function deleteList(listId) {
    lists = lists.filter(listObj => listObj.id !== listId)
    tasks = tasks.filter(taskObj => taskObj.listId !== listId)
  }

  function handleDeleteTask(event) {
    const taskId = event.target.dataset.taskId
    tasks = tasks.filter(taskObj => taskObj.id !== parseInt(taskId))
    renderApp()
  }

  function handleNewTask(event) {
    event.preventDefault()
    const taskDescription = document.getElementById('new-task-description').value
    const taskPriority = document.getElementById('new-task-priority').value
    const parentListId = document.getElementById('parent-list').value
    addNewTask(taskDescription, taskPriority, parentListId)
    renderApp()
  }

  const addNewTask = (function (){
    let taskCounter = 0
    return function (description, priority, listIdStr) {
      tasks.push({ id: ++taskCounter, description: description, priority: priority, listId: parseInt(listIdStr) })
    }
  })()

  function handleNewList(event) {
    event.preventDefault()
    addNewList(listNameInputField.value)
    console.log(lists)
    listNameInputField.value = ''
    renderApp()
  }

  const addNewList = (function() {
    listCounter = 0
    return function (listName) {
      lists.push({ id: ++listCounter, name: listName })
    }
  })()

  function generateNewTaskForm() {
    return `
          <div id="app-content">
            <form id="create-task-form">
              <label for="parent-list">Select List:</label>
              <select id="parent-list">
                ${generateOptionsForListForm()}
              </select>

              <label for="new-task-description">Task description:</label>
              <input required type="text" id="new-task-description" placeholder="description">

              <label for="new-task-priority">Priority level:</label>
              <input type="text" id="new-task-priority" placeholder="priority">
              <input data-action="create-new-task" type="submit" value="Create New Task">
            </form>
          </div>
        `
  }

  function generateOptionsForListForm() {
    return lists.map( listObj => `
      <option value="${listObj.id}" selected>
        ${listObj.name}
      </option>
    `).join('')
  }

  function generateListsHTML() {
    const listHTML = lists.map(listObj => `<div>
                                            <h2>${listObj.name}
                                              <button data-list-id="${listObj.id}" data-action="delete-list" data-title="${listObj.name}" class="delete-list">
                                                X
                                              </button>
                                            </h2>
                                            <ul>
                                              ${generateListsTaskHTML(listObj.id)}
                                            </ul>
                                          </div>`).join('')
    return `<div id="lists">${listHTML}</div>`
  }

  function generateListsTaskHTML(listId) {
    const listTask = tasks.filter(taskObj => taskObj.listId === listId)
    return listTask.map(taskObj => `<li>
                                    Task: ${taskObj.description}
                                    <button data-action="delete-task" data-list-title="${taskObj.parentListName}" data-task-id="${taskObj.id}" class="delete-task">
                                        X
                                    </button>
                                    <br>
                                    Priority: ${taskObj.priority}
                                  </li>` ).join('')

  }

  function renderApp() {
    const appHTML = `${generateNewTaskForm()}${generateListsHTML()}`
    appRoot.innerHTML = appHTML
  }

});
