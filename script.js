import { checkComplete } from "./components/CheckComplete.js"
import { delIcon } from "./components/DelTask.js";

  
  const btn = document.querySelector("[data-form-btn]");
const createTask = (evento)=>{
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]")
    const list = document.querySelector("[data-list]")
    const task = document.createElement("li")
    task.classList.add("card")
    const inputV = input.value
    input.value = ""
    const taskContent = document.createElement("div");
    taskContent.appendChild(checkComplete())
    const tittleTask = document.createElement("span");
    tittleTask.classList.add("task");
    tittleTask.innerText=inputV
    taskContent.appendChild(tittleTask)
    //taskContent.appendChild(delIcon())

    task.appendChild(taskContent)
    task.appendChild(delIcon())
    list.appendChild(task);
    
    const calendar = document.querySelector("[data-form-date]");
    const date = calendar.value
    const dateFormat=moment(date).format("DD/MM/YYYY")
    console.log(dateFormat);
    console.log("todo normal aqui amiguito"); 
};

btn.addEventListener("click", createTask);
