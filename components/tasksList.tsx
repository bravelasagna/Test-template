import { StrictMode, useState } from 'react';
import React = require('react');

export default function ListTasks({ onTaskEditClick, dataListTasks }) {
  function handleEditClick(taskId) {
    onTaskEditClick(taskId);
  }
  function handleAddClick(taskId) {
    onTaskEditClick(0);
  }

  return (
    <div>
      {dataListTasks.map((task) => {
        return (
          <li key={task.taskId}>
            {task.title}{' '}
            <button onClick={(e) => handleEditClick(task.taskId)}>Edit</button>
          </li>
        );
      })}
      <button onClick={handleAddClick}>Add Task</button>
    </div>
  );
}
