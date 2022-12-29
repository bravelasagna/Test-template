import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LocalData } from './data/localData';
import { ProjectEntity } from './data/projectEntity';
import ListProjects from './components/projectsList';
import EditProjects from './components/projectsEdit';
import ListTasks from './components/tasksList';
import EditTasks from './components/tasksEdit';

import SideBar from './components/sidebar';

import PagesHomepage from './pages/homepage';
import PagesColleagues from './pages/colleagues';

// MAIN APP
export default function App() {

  return (
    <div>
      <div className="page">
        <div className="sidebar">
          <SideBar />
        </div>
        <main>
          <Routes>
            <Route path="/" element={<PagesHomepage  />} />
            <Route
              path="/homepage"
              element={<PagesHomepage  />}
            />
            <Route
              path="/colleagues"
              element={<PagesColleagues  />}
            />
          </Routes>
        </main>
      </div>
    </div>
  );

}
