import { taskArray } from "./addTasks";


function changeStatus(e) {
  
  if (e.target.parentNode.classList.value !== "striked") {
    e.target.parentNode.classList.add("striked");
    taskArray[0].striked = true;
    console.log(taskArray)
  } else {
    e.target.parentNode.classList.remove("striked");
    taskArray[0].striked = false;
    console.log(taskArray)
  }
  
}

export { changeStatus };
