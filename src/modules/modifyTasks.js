

function changeStatus(e) {
  if (e.target.classList.value !== "striked") {
    e.target.classList.add("striked");
  } else {
    e.target.classList.remove("striked");
  }
  
}

export { changeStatus };
