'use strict';

import initialTasks from './task-data.js';

let currentTaskList = initialTasks.map((obj, index) => {
  return {id: index + 1, ...obj};
});
console.log(currentTaskList);
