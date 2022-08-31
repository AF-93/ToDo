import { createTask } from "./AddTask.js";

export const readTask = () =>{
    const list = document.querySelector("[data-list]")
    
    const taskList = JSON.parse(localStorage.getItem("task")) || [];
    taskList.forEach( (task) => {
        list.appendChild(createTask(task))
    });
    console.log(taskList);
}
