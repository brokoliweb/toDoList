import { taskList, taskArray } from "./addTasks";



function listAllTasks(e) {
  console.log(e);
  taskList.innerHTML = "";
  taskArray
}

function listTodayTasks(e) {
  console.log(e);
  taskList.innerHTML = "";
}

function listWeekTasks(e) {
  console.log(e);
  taskList.innerHTML = "";
}

export { listAllTasks, listTodayTasks, listWeekTasks };