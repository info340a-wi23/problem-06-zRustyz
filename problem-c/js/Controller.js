'use strict';
import * as model from './Model.js';
import { renderTaskList } from './View.js';

function markCompleteCallback(task) {
  model.markComplete(task.id);
  renderTaskView();
}

export function renderTaskView() {
  let root = document.getElementById('tasks-root');
  root.innerHTML = '';
  root.append(renderTaskList(markCompleteCallback));
}

let btn = document.getElementById('add-task-button');
btn.addEventListener('click', () => {
  let input = document.querySelector('input').value;
  if (input !== '') {
    model.addTask(input);
    document.querySelector('input').value = '';
    renderTaskView();
  }
});