// https://github.com/mkaya13/react-todo-list
// https://uizard.io/templates/web-app-templates/to-do-web-app/

import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

//import ToDoList from './components/To
import Dashboard from './components/Dashboard';

import LocalData from './data/localData';
import { ProjectEntity } from './data/projectEntity';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

let localData = new LocalData();
let dbProjectsList: ProjectEntity[] = localData.returnLocalDataProjects();



root.render(
  <StrictMode>
    <Dashboard projectsListProp={dbProjectsList} />
  </StrictMode>
);

/*
{dbTasksList.map((taskItem) => (
      <div>
        {taskItem.taskId} - {taskItem.title}
      </div>
    ))}
*/
