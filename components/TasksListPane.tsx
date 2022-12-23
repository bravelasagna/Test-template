import * as React from 'react';
import TasksListPaneItem from './TasksListPaneItem';

export default function TasksListPane({ currentProject, onSelectTaskClick }) {
  return (
    <div>
      <span>List of Tasks</span>
      {currentProject.tasks.map((task) => {
        console.log(task.taskId);
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
    </div>
  );
}
