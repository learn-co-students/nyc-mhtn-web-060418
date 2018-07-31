class TaskListerViews {
    static newListForm() {
        return `<form id="create-list-form" action="#" method="post">
                    <label for="new-list-title">Add a new list:</label>
                    <input required type="text" id="new-list-title" name="new-list-title" placeholder="title">
                    <input data-action="create-new-list" type="submit" value="Create New List">
                </form>`
    }

    static get newListName() {
        return document.getElementById('new-list-title').value
    }

    static get newTaskDescription() {
        return document.getElementById('new-task-description').value
    }

    static get newTaskPriority() {
        return document.getElementById('new-task-priority').value
    }

    static get newTaskListId() {
        return parseInt(document.getElementById('parent-list').value)
    }

    static optionsHTML(lists) {
        return lists.map(listObj => `<option value="${listObj.id}" selected>${listObj.name}</option>`).join('')
    }

    static newTaskHTML(lists) {
        return `<form id="create-task-form">
                    <label for="parent-list">Select List:</label>
                    <select id="parent-list">
                        ${this.optionsHTML(lists)}
                    </select>

                    <label for="new-task-description">Task description:</label>
                    <input required type="text" id="new-task-description" placeholder="description">

                    <label for="new-task-priority">Priority level:</label>
                    <input type="text" id="new-task-priority" placeholder="priority">
                    <input data-action="create-new-task" type="submit" value="Create New Task">
                </form>`
    }

    static allLists(lists) {
        const listHTML =  lists.map(listObj => `<div>
                <h2>${listObj.name}<button data-action="delete-list" data-list-id="${listObj.id}" class="delete-list">X</button></h2>
                <ul>${listObj.tasks().map(taskObj => taskObj.toHTML()).join('')}</ul>
            </div>`)
        .join('')

        return `<div id='lists'>${listHTML}</div>`
    }

    static taskHTML(taskObj) {
        return `<li>
                    Task: ${taskObj.description}
                    <button data-action="delete-task" data-task-id="${taskObj.id}" class="delete-task">X</button><br>
                    Priority: ${this.priority}
                </li>`
    }
}