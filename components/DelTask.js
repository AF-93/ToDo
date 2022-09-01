import { displayTask } from "./ReadTasks.js"
export const delIcon = (id)=>{
    const i =document.createElement("i");
    i.classList.add("fas","fa-trash-alt","trashIcon");
    i.addEventListener("click",(Event)=>delTask(id))
    return i
  }
  const delTask = (id)=> {
    const list = document.querySelector("[data-list]");
    const task = JSON.parse(localStorage.getItem("task"))
    const index = task.findIndex((item)=>item.id===id)
    task.splice(index,1);
    localStorage.setItem("task", JSON.stringify(task))
    list.innerHTML = ""
    displayTask()
  }