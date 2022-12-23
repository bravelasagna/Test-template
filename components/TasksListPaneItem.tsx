import * as React from 'react';

export default function TasksListPaneItem({
  task,
  onSelectTaskClick
}) {
  return (
    <div>
      <a onClick={() => onSelectTaskClick(task)} href='#'>
        {task.title}
      </a>
    </div>
  );
}
