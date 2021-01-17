import { renderTaskList, storeLocal, allTasks, today, week, taskArray } from "../index";
import {
  format,
  parseISO,
  compareAsc,
  differenceInCalendarWeeks,
} from "date-fns";
import { listAllTasks, listTodayTasks, listWeekTasks } from "./listTasks";


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

  taskForm.style.display = "none";

  taskArray.push({
    title: taskTitle.value,
    description: taskDescription.value || "no description",
    date: dueDate.value || "no due date",
    striked: false,
  });

  taskArray.sort((a, b) => (a.date > b.date ? 1 : -1));
  listAllTasks();

  createTodayTaskArray();
  createWeekTaskArray();
  storeLocal();
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
  let newArray = [];
  for (let i = 0; i < taskArray.length; i++) {
    if (taskArray[i].striked === false) {
      newArray.push({
        title: taskArray[i].title,
        description: taskArray[i].description,
        date: taskArray[i].date,
        striked: taskArray[i].striked,
      });
    }
  }
  taskArray = newArray;
  listAllTasks();
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
