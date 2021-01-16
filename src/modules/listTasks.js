import { taskList, taskArray, todayTaskArray, weekTaskArray } from "./addTasks";
import { allTasks, today, week, renderTaskList } from "../index";

function listAllTasks(e) {
  allTasks.style.color = "red";
  today.style.color = "black";
  week.style.color = "black";
  taskList.innerHTML = "";
  for (let i = 0; i < taskArray.length; i++) {
    let tableRow = document.createElement("tr");
    tableRow.id = i;
    if (taskArray[i].striked === true) {
      tableRow.classList.add("striked");
    }
    taskList.appendChild(tableRow);

    let tableColumn1 = document.createElement("td");
    let tableColumn2 = document.createElement("td");
    tableColumn1.textContent = `${taskArray[i].title} || ${
      taskArray[i].taskDescription || "no description"
    }`;
    tableColumn2.textContent = taskArray[i].date || "no due date";
    tableRow.appendChild(tableColumn1);
    tableRow.appendChild(tableColumn2);
  }
  renderTaskList();
}

function listTodayTasks(e) {
  console.log(todayTaskArray);
  allTasks.style.color = "black";
  today.style.color = "red";
  week.style.color = "black";
  taskList.innerHTML = "";
  for (let i = 0; i < todayTaskArray.length; i++) {
    let tableRow = document.createElement("tr");
    tableRow.id = i;
    if (todayTaskArray[i].striked === true) {
      tableRow.classList.add("striked");
    }
    taskList.appendChild(tableRow);
    let tableColumn1 = document.createElement("td");
    let tableColumn2 = document.createElement("td");
    tableColumn1.textContent = `${todayTaskArray[i].title} || ${
      todayTaskArray[i].taskDescription || "no description"
    }`;
    tableColumn2.textContent = todayTaskArray[i].date || "no due date";
    tableRow.appendChild(tableColumn1);
    tableRow.appendChild(tableColumn2);
  }
  renderTaskList();
}

function listWeekTasks(e) {
  allTasks.style.color = "black";
  today.style.color = "black";
  week.style.color = "red";
  taskList.innerHTML = "";
  for (let i = 0; i < weekTaskArray.length; i++) {
    let tableRow = document.createElement("tr");
    tableRow.id = i;
    if (weekTaskArray[i].striked === true) {
      tableRow.classList.add("striked");
    }
    taskList.appendChild(tableRow);
    let tableColumn1 = document.createElement("td");
    let tableColumn2 = document.createElement("td");
    tableColumn1.textContent = `${weekTaskArray[i].title} || ${
      weekTaskArray[i].taskDescription || "no description"
    }`;
    tableColumn2.textContent = weekTaskArray[i].date || "no due date";
    tableRow.appendChild(tableColumn1);
    tableRow.appendChild(tableColumn2);
  }
  renderTaskList();
}

export { listAllTasks, listTodayTasks, listWeekTasks };
