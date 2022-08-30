export const delIcon = ()=>{
    const i =document.createElement("i");
    i.classList.add("fas","fa-trash-alt","trashIcon");
    i.addEventListener("click",delTask)
    return i
  }
  const delTask = (event)=> {
    const parent = event.target.parentElement;
    parent.remove()
  
  }