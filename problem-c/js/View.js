'use strict';

import { getIncompleteTasks } from "./Model.js";

function renderSingleTask(task, markCompleteCallback) {
  let itm = document.createElement("li");
  itm.classList.add("list-group-item");
  itm.textContent = " " + task.description;
  let button = document.createElement('button');
  button.classList.add('btn', 'btn-small', 'btn-warning');
  button.innerHTML = '<span class="material-icons-outlined">done</span>';
  button.addEventListener('click', () => {
    markCompleteCallback(task);
  });
  itm.prepend(button);
  return itm;
}

export function renderTaskList(callback) {
  let ul = document.createElement('ul');
  ul.classList.add('list-group', 'list-group-flush');
  let incompleteTasks = getIncompleteTasks();
  incompleteTasks.forEach((task) => ul.appendChild(renderSingleTask(task, callback)));
  return ul;
}
