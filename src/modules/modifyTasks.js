import { taskArray, todayTaskArray, weekTaskArray } from "./addTasks";

function changeStatus(e) {
  let indexNum = Number(e.target.parentNode.id);
  if (e.target.parentNode.classList.value !== "striked") {
    e.target.parentNode.classList.add("striked");
    taskArray[indexNum].striked = true;
    todayTaskArray[indexNum].striked = true;
    weekTaskArray[indexNum].striked = true;
  } else {
    e.target.parentNode.classList.remove("striked");
    taskArray[indexNum].striked = false;
    todayTaskArray[indexNum].striked = false;
    weekTaskArray[indexNum].striked = false;
  }
}

export { changeStatus };
