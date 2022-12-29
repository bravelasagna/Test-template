import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './app';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// MAIN RENDERING
root.render(
  <StrictMode>
    <BrowserRouter>
      <div>k</div>
      <App />
    </BrowserRouter>
  </StrictMode>
);
