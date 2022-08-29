const btn = document.querySelector("[data-form-btn]");

const createTask = (evento)=>{
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]")
    inputV = input.value
    console.log(inputV); 
};

btn.addEventListener("click", createTask);

