import { taskArray } from "./addTasks";

function changeStatus(e) {
  
    let indexNum = Number(e.target.parentNode.id);
  

  if (e.target.parentNode.classList.value !== "striked") {
    e.target.parentNode.classList.add("striked");
    taskArray[indexNum].striked = true;
    console.log(taskArray);
  } else {
    e.target.parentNode.classList.remove("striked");
    taskArray[indexNum].striked = false;
    console.log(taskArray);
  }
}

export { changeStatus };
