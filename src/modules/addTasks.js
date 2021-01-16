import { renderTaskList, allTasks, today, week } from "../index";
import {
  format,
  parseISO,
  compareAsc,
  differenceInCalendarWeeks,
} from "date-fns";
import { listAllTasks, listTodayTasks, listWeekTasks } from "./listTasks";

const taskArray = [];
let todayTaskArray = [];
let weekTaskArray = [];

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

  taskArray.push({
    title: taskTitle.value,
    description: taskDescription.value,
    date: dueDate.value,
    striked: false,
  });
  if (taskArray[tableRow.id].date === "") {
    taskArray[tableRow.id].date = "none";
  }
  taskArray.sort((a, b) => (a.date > b.date ? 1 : -1));
  listAllTasks();

  createTodayTaskArray();
  createWeekTaskArray();
}

function cancelForm() {
  taskForm.style.display = "none";
  renderTaskList();
}

function createTodayTaskArray() {
  todayTaskArray = [];
  let todaysDate = parseISO(format(new Date(), "yyyy-MM-dd"));

  taskArray.map((x) => {
    let userDate = parseISO(x.date);

    if (compareAsc(todaysDate, userDate) === 0) {
      todayTaskArray.push({
        title: x.title,
        description: x.description,
        date: x.date,
        striked: x.striked,
      });
    }
  });
}

function createWeekTaskArray() {
  weekTaskArray = [];
  let todaysDate = parseISO(format(new Date(), "yyyy-MM-dd"));

  taskArray.map((x) => {
    let userDate = parseISO(x.date);
    if (
      differenceInCalendarWeeks(todaysDate, userDate, { weekStartsOn: 1 }) === 0
    ) {
      weekTaskArray.push({
        title: x.title,
        description: x.description,
        date: x.date,
        striked: x.striked,
      });
    }
  });
}

const clearButton = document.querySelector(".clear-tasks");

clearButton.addEventListener("click", clearTasks);

function clearTasks() {
  for (let i = 0; i < taskArray.length; i++) {
    if (taskArray[i].striked === true) {
      taskArray.splice(i, 1);
    }
  }
  createTodayTaskArray();
  createWeekTaskArray();

  renderAfterClear();
}

function renderAfterClear() {
  if (allTasks.style.color === "red") {
    listAllTasks();
  } else if (today.style.color === "red") {
    listTodayTasks();
  } else if (week.style.color === "red") {
    listWeekTasks();
  }
}

export {
  taskList,
  taskArray,
  todayTaskArray,
  weekTaskArray,
  createTodayTaskArray,
  createWeekTaskArray,
  openProjectForm,
};
