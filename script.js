import { addTask } from "./components/AddTask.js";
import { displayTask } from "./components/ReadTasks.js";

  const btn = document.querySelector("[data-form-btn]");

  btn.addEventListener("click", addTask);
  displayTask()
