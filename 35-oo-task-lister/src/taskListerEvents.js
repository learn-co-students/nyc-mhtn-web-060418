class TaskListerEvents {
    static bind(rootNode) {
        rootNode.addEventListener('click', function (event) {
            event.preventDefault()
            this.handleEvent(event)
        }.bind(this))
    }

    static handleEvent(event) {
        switch (event.target.dataset.action) {
            case 'create-new-list':
                new List(TaskListerViews.newListName)
            TaskLister.render()
            break;

            case 'create-new-task':
            new Task(
                TaskListerViews.newTaskDescription,
                TaskListerViews.newTaskPriority,
                TaskListerViews.newTaskListId
            )
            TaskLister.render()
            break;

            case 'delete-list':
            List.deleteListWithId(parseInt(event.target.dataset.listId))
            TaskLister.render()
            break;

            case 'delete-task':
            Task.deleteTask(parseInt(event.target.dataset.taskId))
            TaskLister.render()
            break;
        }
    }
}