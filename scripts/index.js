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

        // Todo : create elements : div>li> button*2

        // Create & append elements to be shown in the task list

        // Creation of a task card : holds a task item (name and action buttons)
        const taskCard = document.createElement('div');
        // Add a class to this task card
        taskCard.classList.add('task-card');
        // console.log(taskCard);
        // taskCard.innerHTML = 'Task card added';
        // Append the task card to the task list
        taskList.appendChild(taskCard);

        // Creation of a li as task item (task name)
        const taskItem = document.createElement('li');
        // console.log(taskCard);
        // taskItem.innerHTML = 'Task test';
        taskItem.classList.add('task-item');
        taskCard.appendChild(taskItem);

        // Creation of a button for a completed task
        const completedButton = document.createElement('button');
        console.log(completedButton);
        completedButton.innerHTML = '<i class="fas fa-check"></i>';
        completedButton.classList.add('complete-btn');
        taskCard.appendChild(completedButton);

        // Creation of a button for a task to be deleted
        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="far fa-trash-alt"></i>';
        deleteButton.classList.add('delete-btn');
        taskCard.appendChild(deleteButton);
    })
};
addTask();