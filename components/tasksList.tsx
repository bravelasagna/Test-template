import { StrictMode, useState } from 'react';
import React = require('react');
import Button from 'react-bootstrap/Button';
import { GrEdit } from 'react-icons/gr';

export default function ListTasks({
  onTaskEditClick,
  onProjectEditClick,
  dataListTasks,
  projectTitle,
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
        <h3>
          {projectTitle}
          <GrEdit onClick={(e) => onProjectEditClick()} />
        </h3>
      </div>
      {dataListTasks.map((task) => {
        return (
          <li key={task.taskId}>
            {task.title}{' '}
            <GrEdit onClick={(e) => handleEditClick(task.taskId)} />
          </li>
        );
      })}
      <Button variant="primary" size="sm" onClick={handleAddClick}>
        <GrEdit />
        Add Task
      </Button>
    </div>
  );
}
