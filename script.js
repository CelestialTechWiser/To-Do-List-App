// Function to add a new task
function addTask() {
    var input = document.getElementById("taskInput");
    var dateInput = document.getElementById("taskDate");
    var timeInput = document.getElementById("taskTime");
    var taskText = input.value.trim();
    var taskDate = dateInput.value.trim();
    var taskTime = timeInput.value.trim();
    
    if (taskText !== "" && taskDate !== "" && taskTime !== "") {
        var ul = document.getElementById("taskList");
        var li = document.createElement("li");
        li.innerHTML = `<span>${taskText}</span> <span class="task-time">${taskDate} ${taskTime}</span> <span onclick="editTask(this)">✏️</span> <span onclick="deleteTask(this)">❌</span>`;
        ul.appendChild(li);
        input.value = "";
        dateInput.value = "";
        timeInput.value = "";
    } else {
        alert("Please enter a task, date, and time.");
    }
}

// Function to edit a task
function editTask(spanElement) {
    var li = spanElement.parentElement;
    var taskText = li.children[0].textContent;
    var taskDateTime = li.children[1].textContent.split(' ');
    var taskDate = taskDateTime[0];
    var taskTime = taskDateTime[1];
    var newText = prompt("Edit task:", taskText);
    var newDate = prompt("Edit date:", taskDate);
    var newTime = prompt("Edit time:", taskTime);
    
    if (newText !== null && newText.trim() !== "" && newDate !== null && newDate.trim() !== "" && newTime !== null && newTime.trim() !== "") {
        li.children[0].textContent = newText.trim();
        li.children[1].textContent = `${newDate.trim()} ${newTime.trim()}`;
    }
}

// Function to delete a task
function deleteTask(spanElement) {
    var li = spanElement.parentElement;
    li.remove();
}
