import * as TaskFunctions from './taskFunctions.js';

let searchTask = document.getElementById('task-search__input');
let taskSubmit = document.getElementById('task-submit__button');
let toDoListReset = document.getElementById('reset__button');

window.addEventListener('load', TaskFunctions.loadTasks);

window.addEventListener('load', TaskFunctions.loadTasksFromLocalStorage);

taskSubmit.addEventListener('click', TaskFunctions.addTask);

searchTask.addEventListener('change', (event) => {
    let searchValue = event.target.value;

    if (!searchValue) {
        TaskFunctions.displayAllTasks();
    } else {
        TaskFunctions.getTask(searchValue);
        searchTask.focus();
    }
});

toDoListReset.addEventListener('click', TaskFunctions.resetTasks);

