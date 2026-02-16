let taskInput = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");

function addTask() {
    let taskText = taskInput.value;

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // create li
    let li = document.createElement("li");
    li.innerText = taskText;

    // mark completed when click
    li.onclick = function () {
        li.classList.toggle("completed");
    };

    // create delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "X";

    deleteBtn.onclick = function () {
        li.remove();
    };

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    // clear input
    taskInput.value = "";
}

