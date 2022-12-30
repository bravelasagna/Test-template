import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { LocalData } from './data/localData';
// import { ProjectEntity } from './data/projectEntity';
import ListProjects from './components/projectsList';
import EditProjects from './components/projectsEdit';
import ListTasks from './components/tasksList';
import EditTasks from './components/tasksEdit';

import SideBar from './components/sidebar';

import PagesHomepage from './pages/homepage';
import PagesColleagues from './pages/colleagues';
import PagesAdmin from './pages/admin';
import PagesAdminTeams from './pages/adminTeams';

// MAIN APP
export default function App() {
  return (
    <div>
      <div className="page">
        <div className="sidebar">
          <div className="navbar-brand-container">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                HR-Soft
              </a>
            </div>
          </div>
          <SideBar />
        </div>
        <main>
          <div className="top-row px-4">
            <div>Davide Galimmerbt</div>
            <a className="nav-link" href="login">
              <span className="oi oi-list-rich"></span> Login
            </a>
            <div>Logout</div>
          </div>
          <article className="content px-4">
            <Routes>
              <Route path="/" element={<PagesHomepage />} />
              <Route path="/homepage" element={<PagesHomepage />} />
              <Route path="/colleagues" element={<PagesColleagues />} />
              <Route path="/admin" element={<PagesAdmin />} />
              <Route path="/adminteams" element={<PagesAdminTeams />} />
            </Routes>
          </article>
          <footer className="d-flex flex-wrap justify-content-center align-items-center px-3 pt-4 pb-4 mt-5 border-top app-footer">
            Copyright La mia App molto bella - 2022
          </footer>
        </main>
      </div>
    </div>
  );
}
