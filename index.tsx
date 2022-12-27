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
  const [currentProjectIdState, setCurrentProjectIdState] = useState(1);
  const [isEditProjectState, setIsEditProjectState] = useState(false);

  // PROJECTS MANAGEMENT -------------------------
  // happens when a different project is selected in the projects list
  function handleSelectProject(projectId) {
    setCurrentProjectIdState(projectId);
    console.log('current project is set to:' + projectId);
  }

  // happens when the "edit" project is clicked
  function handleEditProject(projectId) {
    setCurrentProjectIdState(projectId);
    setIsEditProjectState(true);
    console.log('current project is set to:' + projectId);
  }

  // renders the input to change the project title only when the "edit" button is clicked (or "add")
  function RenderEditProjectPanel() {
    let existingProjectTitle = '';
    if (currentProjectIdState > 0) {
      existingProjectTitle = dataListProjectsState.find(
        (project) => project.projectId === currentProjectIdState
      ).title;
    }
    if (isEditProjectState) {
      return (
        <EditProjects
          onProjectSaved={handleProjectSaved}
          existingProjectTitle={existingProjectTitle}
        ></EditProjects>
      );
    }
  }

  // happens when the 'Save' button is clicked in the projects list (add or update)
  function handleProjectSaved(projectTitle) {
    // if there is no selected project, then we add a new project item
    console.log(currentProjectIdState);
    if (currentProjectIdState == 0) {
      let newProjectsArray = dataListProjectsState.slice();
      let newId = dataListProjectsState.length + 1;
      newProjectsArray.push({
        projectId: newId,
        title: projectTitle,
        tasks: [],
      });
      setDataListProjectsState(newProjectsArray);
      setIsEditProjectState(false);
      setCurrentProjectIdState(newId);
    } else {
      // there is a selected project, we edit the existing project details
      setDataListProjectsState((project) =>
        project.map((obj) => {
          if (obj.projectId === currentProjectIdState) {
            return { ...obj, title: projectTitle };
          }
          return obj;
        })
      );
      setIsEditProjectState(false);
    }
  }
  // PROJECTS MANAGEMENT -------------------------

  return (
    <div>
      <ListProjects
        onProjectSelectClick={handleSelectProject}
        onProjectEditClick={handleEditProject}
        dataListProjects={dataListProjectsState}
        currentProjectId={currentProjectIdState}
      ></ListProjects>
      <RenderEditProjectPanel></RenderEditProjectPanel>
    </div>
  );
}

// MAIN RENDERING
root.render(
  <StrictMode>
    <App></App>
  </StrictMode>
);
