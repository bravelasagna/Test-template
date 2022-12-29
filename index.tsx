import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './style.css';

import App from './app';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// MAIN RENDERING
root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
