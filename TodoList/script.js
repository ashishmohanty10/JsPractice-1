const input = document.getElementById("input");
const taskList = document.getElementById("taskList");
const addBtn = document.getElementById("addBtn");
const removeBtn = document.getElementById("removeBtn");

addBtn.addEventListener("click", function () {
  const task = input.value.trim();

  if (task !== "") {
    const newTask = document.createElement("li");
    newTask.textContent = task;
    taskList.appendChild(newTask);
    input.value = "";
  }
});

removeBtn.addEventListener("click", function () {
  taskList.innerHTML = "";
});
