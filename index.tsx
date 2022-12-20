// https://github.com/mkaya13/react-todo-list
// https://uizard.io/templates/web-app-templates/to-do-web-app/

import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import ToDoList from './components/ToDoList';
import Dashboard from './components/Dashboard';

import { dbTasksList } from './data/localData';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Dashboard projectsList />
  </StrictMode>
);

/*
{dbTasksList.map((taskItem) => (
      <div>
        {taskItem.taskId} - {taskItem.title}
      </div>
    ))}
*/
