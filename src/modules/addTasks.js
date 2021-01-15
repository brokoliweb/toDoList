import { renderTaskList } from "../index";
import { format, parseISO, compareAsc, differenceInCalendarWeeks } from "date-fns";
import { listAllTasks, listTodayTasks, listWeekTasks } from './listTasks'


const taskArray = [];
const todayTaskArray = [];
const weekTaskArray = [];

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
  listAllTasks();
}

function addProject() {
  if (taskTitle.value === "") {
    alert("Title can not be empty");
    return;
  }
  let tableRow = document.createElement("tr");
  tableRow.id = `${taskArray.length}`;
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

  let todaysDate = parseISO(format(new Date(), "yyyy-MM-dd"));
  let userDate = parseISO(dueDate.value);
  

  if ((compareAsc(todaysDate, userDate) === 0)) {
    todayTaskArray.push({
      title: taskTitle.value,
      description: taskDescription.value,
      date: dueDate.value,
      striked: false,
    });
    weekTaskArray.push({
      title: taskTitle.value,
      description: taskDescription.value,
      date: dueDate.value,
      striked: false,
    });
    taskArray.push({
      title: taskTitle.value,
      description: taskDescription.value,
      date: dueDate.value,
      striked: false,
    });
  } else if (differenceInCalendarWeeks(todaysDate, userDate, { weekStartsOn: 1 }) === 0) {
    weekTaskArray.push({
      title: taskTitle.value,
      description: taskDescription.value,
      date: dueDate.value,
      striked: false,
    });
    taskArray.push({
      title: taskTitle.value,
      description: taskDescription.value,
      date: dueDate.value,
      striked: false,
    });
  } else {
    taskArray.push({
      title: taskTitle.value,
      description: taskDescription.value,
      date: dueDate.value,
      striked: false,
    });
  }
  renderTaskList();
}

function cancelForm() {
  taskForm.style.display = "none";
  renderTaskList();
}



export { taskList, taskArray, todayTaskArray, weekTaskArray, openProjectForm };
