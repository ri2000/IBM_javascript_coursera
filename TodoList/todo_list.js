const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");
const clearAllBtn = document.getElementById("clearAll");

let tasks = [];

function addTask(){
    var taskText = taskInput.ariaValueMax.trim();
    if (taskText!== ""){
        tasks.push({text: taskText});
        taskInput.value = "";
        displayTasks();
    }
}

function displayTasks(){
    taskList.innerHTML = "";
    tasks.forEach((task, index) =>{
        const li = document.createElement('li');
        li.innerHtml = `<input type="checkbox" id="${index}">
                        <label for="${index}">Task ${index} text: ${task.text}</label>`;
        
        li.querySelector("input").addEventListener("change", () => toggleTask(index));
        taskList.appendChild(li);
    })
}

function toggleTask(index){
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}

function clearCompletedTasks() {
    tasks = tasks.filter(task => !task.completed);
    displayTasks();
}

function clearAll(){
    tasks = [];
    displayTasks();
}

addTaskBtn.addEventListener("click", addTask);
clearCompletedBtn.addEventListener("click", clearCompletedTasks);
clearAllBtn.addEventListener("click", clearAll);
