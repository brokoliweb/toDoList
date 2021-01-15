import { taskList, taskArray, todayTaskArray, weekTaskArray } from "./addTasks";



function listAllTasks(e) {
 
  
  taskList.innerHTML = "";
  for (let i = 0; i < taskArray.length; i ++) {
    let tableRow = document.createElement("tr");
    tableRow.id = i;
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
  
}

function listTodayTasks(e) {
  taskList.innerHTML = "";
  for (let i = 0; i < todayTaskArray.length; i ++) {
    let tableRow = document.createElement("tr");
    tableRow.id = i;
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
}

function listWeekTasks(e) {
  taskList.innerHTML = "";
  for (let i = 0; i < weekTaskArray.length; i ++) {
    let tableRow = document.createElement("tr");
    tableRow.id = i;
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
}

export { listAllTasks, listTodayTasks, listWeekTasks };