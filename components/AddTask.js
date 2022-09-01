import { uniqueDates } from "../Services/date.js";
import { checkComplete } from "./CheckComplete.js";
import { delIcon } from "./DelTask.js";
import { displayTask } from "./ReadTasks.js";

export const addTask = (evento) =>{
    evento.preventDefault();
    const list = document.querySelector("[data-list]");
	const input = document.querySelector("[data-form-input]")
  	const calendar = document.querySelector("[data-form-date]");
      
      const date = calendar.value
      const dateFormat=moment(date).format("DD/MM/YYYY")
      const inputV = input.value;
      const complete = false	
    
    if (inputV=== "" || date === ""){
        return
    }

	input.value = "";
	calendar.value = "";
    list.innerHTML = "";

    const taskObj = {inputV, dateFormat, complete, id: uuid.v4()};

    const taskList = JSON.parse(localStorage.getItem("task")) || [];
      
    taskList.push(taskObj); 
	console.log(taskList);
    
    localStorage.setItem("task",JSON.stringify(taskList));

    displayTask()
    
  }


    export const createTask = ({inputV,dateFormat,complete,id})=>{
    const task = document.createElement("li")
        task.classList.add("card")
        const taskContent = document.createElement("div");
        const check = checkComplete(id)
        if (complete){
            check.classList.toggle("far");
            check.classList.toggle("fas");
            check.classList.toggle("completeIcon");
        }
        taskContent.appendChild(check)
        const tittleTask = document.createElement("span");
        tittleTask.classList.add("task");
        tittleTask.innerText=inputV
    const dateElement = document.createElement("span");
        dateElement.innerHTML=dateFormat
        const trash = delIcon(id)
	taskContent.appendChild(tittleTask)
            task.appendChild(taskContent)
            task.appendChild(dateElement)
            task.appendChild(trash)

    return task
};