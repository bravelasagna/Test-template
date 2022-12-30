import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './css/common.css';
import './css/nav.css';

import App from './app';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// MAIN RENDERING
// NOTE: Strict mode causes TWICE the rendering. In production, it will only cause it once. So do not remove it.
root.render(
  <StrictMode>    
    <BrowserRouter> 
      <App />
    </BrowserRouter>
  </StrictMode>
);
