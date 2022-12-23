import * as React from 'react';
import TasksListPaneItem from './TasksListPaneItem';

export default function TasksListPane({ currentProject, onSelectTaskClick, onAddTaskClick }) {
  return (
    <div>
      <span>List of Tasks</span>
      {currentProject.tasks.map((task) => {
        return (
          <div>
            <TasksListPaneItem
              key={task.taskId}
              task={task}
              onSelectTaskClick={onSelectTaskClick}
            />
          </div>
        );
      })}
      <button onClick={onAddTaskClick}>Add New Task</button>
    </div>
  );
}
