import { taskList, taskArray, todayTaskArray, weekTaskArray } from "./addTasks";
import { allTasks, today, week, renderTaskList } from "../index";

function listAllTasks(e) {
  allTasks.style.color = "#FAE03A";
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
      taskArray[i].description}`;
    tableColumn2.textContent = taskArray[i].date;
    tableRow.appendChild(tableColumn1);
    tableRow.appendChild(tableColumn2);
  }
  renderTaskList();
}

function listTodayTasks(e) {
  
  allTasks.style.color = "black";
  today.style.color = "#FAE03A";
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
      todayTaskArray[i].description}`;
    tableColumn2.textContent = todayTaskArray[i].date;
    tableRow.appendChild(tableColumn1);
    tableRow.appendChild(tableColumn2);
  }
  renderTaskList();
}

function listWeekTasks(e) {
  allTasks.style.color = "black";
  today.style.color = "black";
  week.style.color = "#FAE03A";
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
      weekTaskArray[i].description}`;
    tableColumn2.textContent = weekTaskArray[i].date;
    tableRow.appendChild(tableColumn1);
    tableRow.appendChild(tableColumn2);
  }
  renderTaskList();
}

export { listAllTasks, listTodayTasks, listWeekTasks };
