import { format, formatRelative, subDays } from 'date-fns'
import { enUS, tr } from 'date-fns/locale'
import { openProjectForm } from './modules/addTasks'
import { changeStatus } from './modules/modifyTasks'

// get DOM Elements
const addProjectButton = document.querySelector('.add-new-task');




// add Event Listeners
addProjectButton.addEventListener('click', openProjectForm);

function renderTaskList() {
  const listElements = document.querySelectorAll('li');
  for( let i = 0; i < listElements.length; i ++) {
    listElements[i].addEventListener("click", changeStatus);
  }
}

export { renderTaskList } ;