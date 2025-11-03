const newTask = document.querySelector("#newTask")
const taskListContainer = document.querySelector(".tasks-list")

const createTaskButton = document.querySelector("#createTask")
const defaultItem = document.querySelector(".default-item")
const errorDisplay = document.querySelector(".errorDisplay")
const removeButton = document.querySelector("#removeButton")
const updateButton = document.querySelector("#updateButton")

function addTask() {
    defaultItem.style.display = "none"
    let taskItem = document.createElement("li")
    let itemContent = document.createElement("span")
    
    let buttonArea = document.createElement("div")
    buttonArea.className = "btn-area"

    let removeButton = document.createElement("button")
    removeButton.className = "button"
    removeButton.type = "button"
    removeButton.textContent = "Supprimer"

    let updateButton = document.createElement("button")
    updateButton.className = "button"
    updateButton.textContent = "Modifier"
    updateButton.type = "button"

    itemContent.className = "item-text"
    taskItem.className = "task-item"
    
    taskListContainer.appendChild(taskItem)
    taskItem.appendChild(itemContent)
        
    itemContent.textContent = newTask.value
    newTask.value = ""
    
    taskItem.appendChild(buttonArea)
    
    buttonArea.appendChild(removeButton)
    buttonArea.appendChild(updateButton)


    function updateTask(){
        let updatefield = document.createElement("input")
        updatefield.type = "text"
        updatefield.value = itemContent.textContent
        updatefield.className = "update-item"
        itemContent.style.display = "none"
        buttonArea.style.display = "none"
        removeButton.style.display = "none"
        updateButton.style.display = "none"
        let saveButton = document.createElement("button")
        saveButton.type = "button"
        saveButton.textContent = "Enregistrer"
        saveButton.className = "button"
        taskItem.appendChild(updatefield)
        taskItem.appendChild(saveButton)

        saveButton.addEventListener("click", function(){
            
        if (updatefield.value.trim() === ""){
            errorDisplay.style.opacity ="1"
            return
        }
        errorDisplay.style.opacity ="0"
        itemContent.textContent = updatefield.value 
        updatefield.style.display = "none"
        saveButton.style.display = "none"
        itemContent.style.display = "inline-block"
        buttonArea.style.display = "inline-block"
        removeButton.style.display = "inline-block"
        updateButton.style.display = "inline-block"

        })
        }

    removeButton.addEventListener("click", function(){
        taskItem.remove()
        if(taskListContainer.children.length === 1){
            defaultItem.style.display = "inline-block"
        }
    });
    
    updateButton.addEventListener("click", function(){
        updateTask()
        }
    );
}

createTaskButton.addEventListener("click", function(){

    if (newTask.value.trim() === ""){
        errorDisplay.style.opacity ="1"
        return
    }
        errorDisplay.style.opacity ="0"
        addTask()
})
