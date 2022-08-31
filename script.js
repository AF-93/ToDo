import { addTask } from "./components/AddTask.js";
import { readTask } from "./components/ReadTasks.js";

  const btn = document.querySelector("[data-form-btn]");

  btn.addEventListener("click", addTask);
  readTask()
