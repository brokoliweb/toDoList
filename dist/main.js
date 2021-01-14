/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderTaskList": () => /* binding */ renderTaskList
/* harmony export */ });
/* harmony import */ var _modules_addTasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/addTasks */ "./src/modules/addTasks.js");
/* harmony import */ var _modules_modifyTasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modifyTasks */ "./src/modules/modifyTasks.js");





// get DOM Elements
const addProjectButton = document.querySelector('.add-new-task');




// add Event Listeners
addProjectButton.addEventListener('click', _modules_addTasks__WEBPACK_IMPORTED_MODULE_0__.openProjectForm);

function renderTaskList() {
  const listElements = document.querySelectorAll('li');
  for( let i = 0; i < listElements.length; i ++) {
    listElements[i].addEventListener("click", _modules_modifyTasks__WEBPACK_IMPORTED_MODULE_1__.changeStatus);
  }
}



/***/ }),

/***/ "./src/modules/addTasks.js":
/*!*********************************!*\
  !*** ./src/modules/addTasks.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "openProjectForm": () => /* binding */ openProjectForm
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.js");


const taskArray = [];

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
  let newListElement = document.createElement("li");
  newListElement.textContent = `${taskTitle.value} || ${taskDescription.value} || ${dueDate.value}`;
  taskList.appendChild(newListElement);
  taskForm.style.display = "none";
  taskArray.push({
    title: taskTitle.value,
    description: taskDescription.value,
    date: dueDate.value
  });
  console.log(taskArray);
  (0,_index__WEBPACK_IMPORTED_MODULE_0__.renderTaskList)();
}

function cancelForm() {
  taskForm.style.display = "none";
  (0,_index__WEBPACK_IMPORTED_MODULE_0__.renderTaskList)();
}








/***/ }),

/***/ "./src/modules/modifyTasks.js":
/*!************************************!*\
  !*** ./src/modules/modifyTasks.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeStatus": () => /* binding */ changeStatus
/* harmony export */ });


function changeStatus(e) {
  if (e.target.classList.value !== "striked") {
    e.target.classList.add("striked");
  } else {
    e.target.classList.remove("striked");
  }
  
}




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./src/index.js");
/******/ })()
;
//# sourceMappingURL=main.js.map