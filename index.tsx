// https://github.com/mkaya13/react-todo-list

import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import ToDoList from './components/ToDoList';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ToDoList />
  </StrictMode>
);