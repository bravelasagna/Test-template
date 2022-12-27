import { StrictMode, useState } from 'react';
import React = require('react');
import { GrEdit } from 'react-icons/gr';

export default function ListTasks({
  onTaskEditClick,
  onProjectEditClick,
  dataListTasks,
  projectTitle
}) {
  function handleEditClick(taskId) {
    onTaskEditClick(taskId);
  }
  function handleAddClick(taskId) {
    onTaskEditClick(0);
  }

  return (
    <div>
      <div>
        {projectTitle}
        <GrEdit onClick={(e) => onProjectEditClick()} />
      </div>
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
