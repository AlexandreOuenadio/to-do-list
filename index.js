const taskList = document.getElementById("taskList");
const submitBtn = document.getElementById("submitBtn");
const inputField = document.getElementById("inputField");
const emptyMessage = document.getElementById("emptyMessage");

let listCount = 0; //the first element is the example


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
    deleteTaskBtn.addEventListener("click", removeTaskFromList);

    const iconDeleteTaskBtn = document.createElement("i");
    iconDeleteTaskBtn.classList.add("fa-solid", "fa-trash");

    deleteTaskBtn.appendChild(iconDeleteTaskBtn);


    taskItem.appendChild(task);
    taskItem.appendChild(deleteTaskBtn);

    return taskItem;

}
function addTaskToList(p_taskItem){
    emptyMessage.classList.remove("empty-message--active");
    taskList.appendChild(p_taskItem);
}
function removeTaskFromList(e){
    e.preventDefault();
    listCount--;
    taskList.removeChild(e.target.parentNode.parentNode);
    if (listCount === 0){
        emptyMessage.classList.add("empty-message--active");
    }
    
}

inputField.addEventListener("keydown", (e) =>{
    if (e.key == "Enter"){
        e.preventDefault();
        submitBtn.click();
    }
    
})

submitBtn.addEventListener("click", (e)=>{

    e.preventDefault();
    
    const taskText = inputField.value;
    if (taskText != ""){
        taskItem = createTask(taskText);
        addTaskToList(taskItem);
        inputField.value = "";
    }
    


})





