import { taskList, todayTaskArray, weekTaskArray } from "./addTasks";
import { allTasks, today, week, renderTaskList, taskArray } from "../index";

function listAllTasks() {
  allTasks.style.color = "green";
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
    let tableColumn3 = document.createElement("td");
    let tableColumn4 = document.createElement("td");
    tableColumn1.textContent = taskArray[i].title;
    if (taskArray[i].priority === "none") {
      tableColumn2.style.background = `#CCD1D1 `;
    } else if (taskArray[i].priority === "low") {
      tableColumn2.style.background = `#3498DB`;
    } else if (taskArray[i].priority === "medium") {
      tableColumn2.style.background = 'yellow';
    } else {
      tableColumn2.style.background = 'red';
    }
    tableColumn3.textContent = taskArray[i].description;
    tableColumn4.textContent = taskArray[i].date;

    tableRow.appendChild(tableColumn1);
    tableRow.appendChild(tableColumn2);
    tableRow.appendChild(tableColumn3);
    tableRow.appendChild(tableColumn4);

  }
  renderTaskList();
}

function listTodayTasks() {
  
  allTasks.style.color = "black";
  today.style.color = "green";
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
    let tableColumn3 = document.createElement("td");
    let tableColumn4 = document.createElement("td");
    tableColumn1.textContent = todayTaskArray[i].title;
    if (todayTaskArray[i].priority === "none") {
      tableColumn2.style.background = `#CCD1D1 `;
    } else if (todayTaskArray[i].priority === "low") {
      tableColumn2.style.background = `#3498DB`;
    } else if (todayTaskArray[i].priority === "medium") {
      tableColumn2.style.background = 'yellow';
    } else {
      tableColumn2.style.background = 'red';
    }
    tableColumn3.textContent = todayTaskArray[i].description;
    tableColumn4.textContent = todayTaskArray[i].date;

    tableRow.appendChild(tableColumn1);
    tableRow.appendChild(tableColumn2);
    tableRow.appendChild(tableColumn3);
    tableRow.appendChild(tableColumn4);

  }
  renderTaskList();
}

function listWeekTasks() {
  allTasks.style.color = "black";
  today.style.color = "black";
  week.style.color = "green";
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
    let tableColumn3 = document.createElement("td");
    let tableColumn4 = document.createElement("td");
    tableColumn1.textContent = weekTaskArray[i].title;
    if (weekTaskArray[i].priority === "none") {
      tableColumn2.style.background = `#CCD1D1 `;
    } else if (weekTaskArray[i].priority === "low") {
      tableColumn2.style.background = `#3498DB`;
    } else if (weekTaskArray[i].priority === "medium") {
      tableColumn2.style.background = 'yellow';
    } else {
      tableColumn2.style.background = 'red';
    }
    tableColumn3.textContent = weekTaskArray[i].description;
    tableColumn4.textContent = weekTaskArray[i].date;

    tableRow.appendChild(tableColumn1);
    tableRow.appendChild(tableColumn2);
    tableRow.appendChild(tableColumn3);
    tableRow.appendChild(tableColumn4);

  }
  renderTaskList();
}

export { listAllTasks, listTodayTasks, listWeekTasks };
