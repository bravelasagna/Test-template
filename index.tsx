// https://github.com/mkaya13/react-todo-list
// https://uizard.io/templates/web-app-templates/to-do-web-app/

import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';

//import ToDoList from './components/To
import Dashboard from './components/Dashboard';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Dashboard />
  </StrictMode>
);
