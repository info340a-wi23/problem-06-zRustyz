'use strict';

import initialTasks from './task-data.js';

let currentTaskList = initialTasks.map((obj, index) => {
  return {id: index + 1, ...obj};
});
console.log(currentTaskList);

export function getIncompleteTasks() {return currentTaskList.filter((obj) => obj.status === 'incomplete');}

export function addTask(desc) {
  let task = {id: currentTaskList.length + 1, description: desc ,status: 'incomplete'};
  currentTaskList = [...currentTaskList, task];
}

export function markComplete(num) {
  let list = currentTaskList.map((obj) => {
    if (obj.id === num) {
      obj.status = "complete"
      return {...obj}
    } else {
      return {...obj}
    }
  })
  currentTaskList = list;
}



console.log(currentTaskList);