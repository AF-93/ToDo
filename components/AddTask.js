import { checkComplete } from "./CheckComplete.js";
import { delIcon } from "./DelTask.js";

export const addTask = (evento) =>{
    evento.preventDefault();
    const list = document.querySelector("[data-list]");
	const input = document.querySelector("[data-form-input]")
  	const calendar = document.querySelector("[data-form-date]");
   		
	const date = calendar.value
    const dateFormat=moment(date).format("DD/MM/YYYY")
	const inputV = input.value;
    
	input.value = "";
	calendar.value = "";
    
    
    const taskList = JSON.parse(localStorage.getItem("task")) || [];
    
    
          
    const taskObj = {inputV,dateFormat};
    taskList.push(taskObj); 
    
    localStorage.setItem("task",JSON.stringify(taskList));
	const task = createTask(taskObj)
    
	list.appendChild(task);
  }


    export const createTask = ({inputV,dateFormat})=>{
    const task = document.createElement("li")
        task.classList.add("card")
        const taskContent = document.createElement("div");
        taskContent.appendChild(checkComplete())
        const tittleTask = document.createElement("span");
        tittleTask.classList.add("task");
        tittleTask.innerText=inputV
    const dateElement = document.createElement("span");
        dateElement.innerHTML=dateFormat
    
	taskContent.appendChild(tittleTask)
            task.appendChild(taskContent)
            task.appendChild(dateElement)
            task.appendChild(delIcon())

    return task
};