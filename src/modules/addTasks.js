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
  if (taskTitle.value === "") {
    alert("Title can not be empty");
    return;
  }
  let tableRow = document.createElement("tr");
  taskList.appendChild(tableRow);
  let tableColumn1 = document.createElement("td");
  let tableColumn2 = document.createElement("td");
  tableColumn1.textContent = `${taskTitle.value} || ${
    taskDescription.value || "no description"
  }`;
  tableColumn2.textContent = dueDate.value || "no due date";
  tableRow.appendChild(tableColumn1);
  tableRow.appendChild(tableColumn2);
  taskForm.style.display = "none";
  taskArray.push({
    title: taskTitle.value,
    description: taskDescription.value,
    date: dueDate.value,
    striked: false,
  });
  console.log(taskArray);
  renderTaskList();
}

function cancelForm() {
  taskForm.style.display = "none";
  renderTaskList();
}

export { taskArray, openProjectForm };
