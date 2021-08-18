//& Target selectors
//& ---------------------------------------------------------------------------

const addTaskInput = document.getElementById('add-task-input');
console.log(addTaskInput);
const addTaskButton = document.getElementById('add-task-button');
console.log(addTaskButton);
const taskList = document.getElementById('task-list');
console.log(taskList);

//& Adding a new task
//& ---------------------------------------------------------------------------

function addTask() {
    // Event listener
    addTaskButton.addEventListener('click', (e) => {
        console.log(e);
        e.preventDefault();
    })
};
addTask();