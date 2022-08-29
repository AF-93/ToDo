const btn = document.querySelector("[data-form-btn]");



const createTask = (evento)=>{
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]")
    const list = document.querySelector("[data-list]")
    const task = document.createElement("li")
    task.classList.add("card")
    inputV = input.value
    input.value = ""
    const content = `<div>
    <i class="far fa-check-square icon"></i>
    <span class="task">${inputV}</span>
  </div>
  <i class="fas fa-trash-alt trashIcon icon"></i>
</li>`;

    task.innerHTML=content

    list.appendChild(task);

    console.log("todo normal aqui amiguito"); 
};

btn.addEventListener("click", createTask);

