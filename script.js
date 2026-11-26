const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");
const clearBtn = document.getElementById("clearBtn");

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = taskText;

    span.addEventListener("click", () => {
        li.classList.toggle("completed");
        updateTaskCount();
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.addEventListener("click", () => {
        li.remove();
        updateTaskCount();
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = "";
    updateTaskCount();
}

function updateTaskCount() {
    const remaining = taskList.querySelectorAll("li:not(.completed)");
    taskCount.textContent = `${remaining.length} tasks remaining`;
}

function clearCompleted() {
    taskList.querySelectorAll(".completed").forEach(task => task.remove());
    updateTaskCount();
}

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", event => {
    if (event.key === "Enter") addTask();
});

clearBtn.addEventListener("click", clearCompleted);
