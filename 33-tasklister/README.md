# JS Behavior Driven Task Lister

Here is an example of the [working app](https://learn-co-curriculum.github.io/js-task-lister-project/)

Your task is to recreate this using Behavior Driven Development. There are no tests for
this lab. Try to create the functionality found in the demo:

* A user should be able to create a new list.
* A user should be able to add new tasks to a list.
* A list has many tasks
* A user should be able to delete a list **and** its associated tasks.

This project is likely larger than anything you have tackled thus far. **Work slowly and
iteratively**. Often this means to get a specific feature working in a purely functional
way and then refactor to an OO approach. If your group can manage to build out all the
functionality without creating instances, more power to you, but it is _very likely that
at some point you are going to wish you could say_ `list.tasks`. This is your world, build a structure that works for you.

(i.e. a `list` has many `tasks`, `task` belongs to a `list`)

# Optional HTML Template
If you want to match the style of the demo exactly, feel free to use the following
templates for your markup:

#### Add Task Form
```html
<div id="app-content">
  <form id="create-task-form">
    <label for="parent-list">Select List:</label>
    <select id="parent-list">
      <!-- Major key alert:
      read the docs for HTML option selected:
      https://www.w3schools.com/tags/att_option_selected.asp -->
    <option value="My Dank List" selected>
      My Dank List
    </option>
    </select>

    <label for="new-task-description">Task description:</label>
    <input required type="text" id="new-task-description" placeholder="description">

    <label for="new-task-priority">Priority level:</label>
    <input type="text" id="new-task-priority" placeholder="priority">
    <input type="submit" value="Create New Task">
  </form>
</div>
```

#### List
```html
<div id="lists">  
<!-- begin list 1 -->
  <div>
    <h2>doughnuts
      <button data-title="doughnuts" class="delete-list">
        X
      </button>
    </h2>
    <ul>
        <li>
        Task: mocha
        <button data-list-title="doughnuts" data-task-name="mocha" class="delete-task">
            X
        </button>
        <br>
        Priority: low
      </li>
      <li>
        Task: chocolate
        <button data-list-title="doughnuts" data-task-name="chocolate" class="delete-task">
          X
        </button>
        <br>
        Priority: high
      </li>
    </ul>
  </div>
<!--end list 1  -->

<!-- begin list 2 -->
  <div>
    <h2>chik fil a
      <button data-title="chik fil a" class="delete-list">
        X
      </button>
    </h2>

    <ul>
      <li>
        Task: spicy chicken deluxe
        <button data-list-title="chik fil a" data-task-name="spicy chicken deluxe" class="delete-task">
          X
        </button>
        <br>
        Priority: high
      </li>
      <li>
        Task: waffle fries
        <button data-list-title="chik fil a" data-task-name="waffle fries" class="delete-task">
        X
        </button>
        <br>
        Priority: high
      </li>
    </ul>
  </div>
<!-- end list 2 -->
</div>
```
<a href='https://learn.co/lessons/fe-js-oo-task-list' data-visibility='hidden'>View this lesson on Learn.co</a>
