const taskList = document.getElementById("taskList");
const submitBtn = document.getElementById("submitBtn");
const inputField = document.getElementById("inputField");

let listCount = 1; //the first element is the example


function createTask(p_text){

    listCount++;

    const taskItem = document.createElement("li");
    taskItem.id = `task-${listCount}`;
    taskItem.classList.add("task-item");

    const task = document.createElement("p");
    task.classList.add("task");
    task.textContent = p_text;
    task.addEventListener("click",(e) =>{
        e.preventDefault();
        task.classList.toggle("task-crossed");
    })

    const deleteTaskBtn = document.createElement("button");
    deleteTaskBtn.classList.add("deleteBtn");

    const iconDeleteTaskBtn = document.createElement("i");
    iconDeleteTaskBtn.classList.add("fa-solid", "fa-trash");

    deleteTaskBtn.appendChild(iconDeleteTaskBtn);

    taskItem.appendChild(task);
    taskItem.appendChild(deleteTaskBtn);

    return taskItem;

}
function addTaskToList(p_taskItem){
    taskList.appendChild(p_taskItem);
}
function removeTaskFromList(p_itemId){

}


submitBtn.addEventListener("click", (e)=>{

    e.preventDefault();
    
    const taskText = inputField.value;

    taskItem = createTask(taskText);
    addTaskToList(taskItem);

    inputField.value = "";


})





