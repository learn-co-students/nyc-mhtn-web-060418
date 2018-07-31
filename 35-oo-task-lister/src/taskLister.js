class TaskLister {
  static start(rootNode) {
    this.rootNode = rootNode
    TaskListerEvents.bind(rootNode)
    this.render()
  }

  static render() {
    this.rootNode.innerHTML = `
      ${TaskListerViews.newListForm()}
      ${List.all().length ? TaskListerViews.newTaskHTML(List.all()) : ""}
      ${List.all().length ? TaskListerViews.allLists(List.all()) : ""}
    `
  }
}
