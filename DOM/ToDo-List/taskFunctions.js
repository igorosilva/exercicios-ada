import { Task } from './classes/Task.js';

let tasks = [];
let taskTitleInput = document.getElementById('task-title__input');
let taskDescriptionInput = document.getElementById('task-description__input');
let taskList = document.getElementById('task-list');

export function updateLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

export function loadTasksFromLocalStorage() {
    const storedTasks = localStorage.getItem('tasks');

    if (storedTasks) {
        tasks = JSON.parse(storedTasks);

        displayAllTasks();
    }
}

export function addTask() {
    let taskName = taskTitleInput.value;
    let taskDescription = taskDescriptionInput.value;

    if (!inputIsNull(taskName) && !inputIsNull(taskDescription)) {
        let task = new Task(generateTaskID(tasks), taskName, taskDescription, false);
        tasks.push(task);

        updateLocalStorage();
        displayAllTasks();
    } else {
        alert("Todos os campos devem ser preenchidos!");
    }
}

export function editTask(task) {
    const taskIndex = tasks.findIndex(t => t.id === task.id);

    if (taskIndex !== -1) {
        const taskTitleEdit = document.querySelectorAll('.task-title')[taskIndex];
        const taskDescriptionEdit = document.querySelectorAll('.task-description')[taskIndex];
        const taskCheckBoxEdit = document.querySelectorAll('.task-checkbox')[taskIndex];

        taskTitleEdit.contentEditable = true;
        taskDescriptionEdit.contentEditable = true;

        taskTitleEdit.addEventListener('blur', () => {
            task.name = taskTitleEdit.textContent;
            updateLocalStorage();
        });

        taskDescriptionEdit.addEventListener('blur', () => {
            task.description = taskDescriptionEdit.textContent;
            updateLocalStorage();
        });

        taskCheckBoxEdit.addEventListener('change', () => {
            task.isDone = taskCheckBoxEdit.checked;
            updateLocalStorage();
        });

        taskTitleEdit.focus();
    }
}

export function deleteTask(task) {
    const taskId = task.id;
    let taskIndex = -1;

    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id === taskId) {
            taskIndex = i;
            break;
        }
    }

    if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1);

        const taskListItem = document.querySelector(`[data-task-id="${taskId}"]`);

        if (taskListItem) {
            taskListItem.remove();
        }

        updateLocalStorage();
        displayAllTasks()
    }
}


export function getTask(taskName) {
    const filteredTasks = tasks.filter(task => task.name === taskName);

    if (filteredTasks.length > 0) {
        const task = filteredTasks[0];
        hideTasks();
        displayTask(task);
    } else {
        alert("Tarefa não encontrada!");
    }
}

export function resetTasks() {
    localStorage.removeItem('tasks');

    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }

    tasks = [];

    updateLocalStorage();
}

export function hideTasks() {
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
}

export function displayAllTasks() {
    hideTasks();

    tasks.forEach(task => {
        displayTask(task);
    });
}

export function displayTask(task) {
    let taskIndex = tasks.indexOf(task);

    let li = document.createElement('li');
    li.classList.add('task-item');

    let taskTextContainer = document.createElement('div');
    taskTextContainer.classList.add('task-item__text');

    let taskTitleHTML = document.createElement('h2');
    taskTitleHTML.classList.add('task-title');
    taskTitleHTML.textContent = task.name;

    let taskDescriptionHTML = document.createElement('p');
    taskDescriptionHTML.classList.add('task-description');
    taskDescriptionHTML.textContent = task.description;

    let taskButtonsContainer = document.createElement('div');
    taskButtonsContainer.classList.add('task-item__buttons');

    let labelCheckbox = document.createElement('label');
    labelCheckbox.classList.add('task-checkbox-label');

    let checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.classList.add('task-checkbox');
    checkbox.dataset.taskIndex = taskIndex;

    let spanCheckbox = document.createElement('span');
    spanCheckbox.classList.add('task-checkbox-custom');

    let editTaskButton = document.createElement('span');
    editTaskButton.classList.add('mdi--note-edit-outline');

    let removeTaskButton = document.createElement('span');
    removeTaskButton.classList.add('mdi--remove');

    taskTextContainer.appendChild(taskTitleHTML);
    taskTextContainer.appendChild(taskDescriptionHTML);

    labelCheckbox.appendChild(checkbox);
    labelCheckbox.appendChild(spanCheckbox);
    taskButtonsContainer.appendChild(labelCheckbox);
    taskButtonsContainer.appendChild(editTaskButton);
    taskButtonsContainer.appendChild(removeTaskButton);

    li.appendChild(taskTextContainer);
    li.appendChild(taskButtonsContainer);

    taskList.appendChild(li);

    taskTitleInput.value = "";
    taskDescriptionInput.value = "";

    taskTitleInput.focus();

    if (task.isDone) {
        taskTitleHTML.style.textDecoration = 'line-through';
    }

    labelCheckbox.addEventListener('click', (event) => {
        if (event.target.checked) {
            taskTitleHTML.style.textDecoration = 'line-through';
        } else {
            taskTitleHTML.style.textDecoration = 'none';
        }

        let taskIndex = parseInt(checkbox.dataset.taskIndex);
        if (tasks[taskIndex]) {
            tasks[taskIndex].isDone = checkbox.checked;
            updateLocalStorage();
        }
    });

    checkbox.addEventListener('change', () => {
        let taskIndex = parseInt(checkbox.dataset.taskIndex);
        if (tasks[taskIndex]) {
            tasks[taskIndex].isDone = checkbox.checked;
        }
    });

    editTaskButton.addEventListener('click', () => {
        editTask(task);
    });

    removeTaskButton.addEventListener('click', () => {
        deleteTask(task)
    });

    checkbox.checked = task.isDone;
}

export function generateTaskID() {
    if (tasks.length === 0) {
        return 1;
    } else {
        let lastTaskID = tasks[tasks.length - 1].id;

        return lastTaskID + 1;
    }
}

export function inputIsNull(input) {
    return input.trim() === '';
}
