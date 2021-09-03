//& Target selectors
//& ---------------------------------------------------------------------------

const addTaskInput = document.getElementById('add-task-input');
// console.log(addTaskInput);
const addTaskButton = document.getElementById('add-task-button');
// console.log(addTaskButton);
const taskList = document.getElementById('task-list');
// console.log(taskList);
const inputWarning = document.getElementById('warning');
// console.log(inputWarning);
const counter = document.getElementById('counter');
// console.log(counter);

//& Adding a new task
//& ---------------------------------------------------------------------------

function addTask() {
  // Event listener
  addTaskButton.addEventListener('click', (e) => {
    console.log(e);
    e.preventDefault();

    //& Checking if input is empty at submission and before creating elements
    //& ---------------------------------------------------------------------------

    checkInput();

    function checkInput() {
      if (addTaskInput.value === '') {
        // Display warning if input is empty

        inputWarning.classList.remove('hide');
        inputWarning.classList.add('show');
      } else {
        // Remove warning if input is filled
        inputWarning.classList.add('hide');
        inputWarning.classList.remove('show');

        // Create & append elements to be shown in the task list

        // Creation of a task card : holds a task item (name and action buttons)
        const taskCard = document.createElement('div');
        // Add a class to this task card
        taskCard.classList.add('task-card');
        // console.log(taskCard);
        // Append the task card to the task list
        taskList.appendChild(taskCard);

        // Creation of a li as task item (task name)
        const taskItem = document.createElement('li');
        // console.log(taskItem);
        taskItem.innerHTML = addTaskInput.value;
        taskItem.classList.add('task-item');
        taskCard.appendChild(taskItem);

        // Creation of a button for a editing a task
        const editButton = document.createElement('button');
        // console.log(editButton);
        editButton.innerHTML = '<i class="far fa-edit"></i>';
        editButton.classList.add('edit-btn');
        taskCard.appendChild(editButton);

        // Creation of a button for a completed task
        const completedButton = document.createElement('button');
        completedButton.innerHTML = '<i class="fas fa-check"></i>';
        completedButton.classList.add('complete-btn');
        taskCard.appendChild(completedButton);

        // Creation of a button for a task to be deleted
        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="far fa-trash-alt"></i>';
        deleteButton.classList.add('delete-btn');
        taskCard.appendChild(deleteButton);

        // Empty input after submitting a new task
        clearInput();

        // Update task counter by incrementing
        incrementCounter();
        // console.log(taskCounter);
      }
    }
  });
}
addTask();

function clearInput() {
  addTaskInput.value = '';
}

//& Updating the task counter
//& ---------------------------------------------------------------------------

// Counter initialization
let taskCounter = 0;

// Displays a summary after adding a new task
function incrementCounter() {
  taskCounter++;
  counter.textContent = `You have currently ${taskCounter} ${
    taskCounter === 1 ? 'task' : 'tasks'
  }`;
}

// Displays a summary after removing a task
function decrementCounter() {
  taskCounter--;
  counter.textContent = `You have currently ${taskCounter} ${
    taskCounter === 1 ? 'task' : 'tasks'
  }`;
  if (taskCounter === 0) {
    counter.textContent = `Well done! You have completed all your tasks`;
  }
}

//& Editing a task
//& ---------------------------------------------------------------------------
taskList.addEventListener('click', editTask);

function editTask(e) {
  // console.log(e.target);
  const clickedButton = e.target;
  if (clickedButton.classList[0] === 'edit-btn') {
    // console.log('Task is being edited');
    const taskToEdit = clickedButton.previousSibling;
    // console.log(taskToEdit);
    // After edit button clicked, make the task item editable and set a focus on it
    taskToEdit.contentEditable = 'true';
    taskToEdit.focus();
  }
}

//& Mark a task completed
//& ---------------------------------------------------------------------------

// Listening to the whole task list
taskList.addEventListener('click', markCompleted);
taskList.addEventListener('click', markDeleted);

function markCompleted(e) {
  // console.log(e.target); // => To see exactly what have been clicked
  const clickedButton = e.target;
  if (clickedButton.classList[0] === 'complete-btn') {
    // console.log("Task is completed");
    const taskToMarkCompleted = clickedButton.parentElement;
    // console.log(taskToMarkCompleted);
    taskToMarkCompleted.classList.add('completed');
  }
}

//& Delete a task
//& ---------------------------------------------------------------------------

function markDeleted(e) {
  // console.log(e.target);
  const clickedButton = e.target;
  if (clickedButton.classList[0] === 'delete-btn') {
    // console.log("Task to delete");
    const taskToMarkDeleted = clickedButton.parentElement;
    // console.log(taskToMarkDeleted);
    taskToMarkDeleted.remove();
    // Update task counter by decrementing
    decrementCounter();
    console.log(taskCounter);
  }
}
