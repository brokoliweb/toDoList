import { renderTaskList } from "../index";

const taskArray = [];

// get DOM Elements
const checkButton = document.getElementById("check-button");
const cancelButton = document.getElementById("cancel-button");
const taskTitle = document.getElementById("title");
const taskDescription = document.getElementById("description");
const dueDate = document.getElementById("due-date");
const taskForm = document.getElementById("task-form");
const taskList = document.getElementById("tasks");

// add Event Listeners
checkButton.addEventListener("click", addProject);
cancelButton.addEventListener("click", cancelForm);

function openProjectForm() {
  taskForm.style.display = "block";
}

function addProject() {
  let newListElement = document.createElement("li");
  newListElement.textContent = `${taskTitle.value} || ${taskDescription.value} || ${dueDate.value}`;
  taskList.appendChild(newListElement);
  taskForm.style.display = "none";
  taskArray.push({
    title: taskTitle.value,
    description: taskDescription.value,
    date: dueDate.value
  });
  console.log(taskArray);
  renderTaskList();
}

function cancelForm() {
  taskForm.style.display = "none";
  renderTaskList();
}





export { openProjectForm };
