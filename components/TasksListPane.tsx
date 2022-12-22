import * as React from 'react';
import TasksListPaneItem from './TasksListPaneItem';

export default function TasksListPane({ listTasks, onSelectTaskClick }) {
  return (
    <div>
      <span>List of Tasks</span>
      {listTasks.map((task) => {
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
