import * as React from 'react';
import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LocalData } from './data/localData';
import { ProjectEntity } from './data/projectEntity';
import ListProjects from './components/projectsListt';
import EditProjects from './components/projectsEdit';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// MAIN APP
function App() {
  // INIT LOCAL DATA
  const [dataListProjectsState, setDataListProjectsState] = useState(LocalData);
  const [currentProjectIdState, setCurrentProjectIdState] = useState(0);

  function handleSetCurrentProject(projectId) {
    setCurrentProjectIdState(projectId);
    console.log('current project is set to:' + projectId);
  }

  function handleProjectSaved(projectTitle) {
    let a = dataListProjectsState.slice();
    a.push({
      projectId: dataListProjectsState.length + 1,
      title: projectTitle,
      tasks: [],
    });
    setDataListProjectsState(a);
    console.log('save project called in parent');
  }

  return (
    <div>
      <ListProjects
        onProjectClick={handleSetCurrentProject}
        dataListProjects={dataListProjectsState}
      ></ListProjects>
      <EditProjects onProjectSaved={handleProjectSaved}></EditProjects>
    </div>
  );
}

// MAIN RENDERING
root.render(
  <StrictMode>
    <App></App>
  </StrictMode>
);
