import * as React from 'react';
import { useState } from 'react';

import LocalData from '../data/localData';
import { ProjectEntity } from '../data/projectEntity';
import ProjectsListPane from './ProjectsListPane';
import ProjectsAddModal from './ProjectsAddModal';

function Dashboard() {
  // loading local data and stores it into state
  let localData = new LocalData();
  let dbProjectsList: ProjectEntity[] = localData.returnLocalDataProjects();

  // generic
  const [projectsList, setProjectsList] = useState(dbProjectsList);
  const [selectedProjectId, setSelectedProjectId] = useState(1);

  // modal add project
  const [showModalAddProject, setShowModalAddProject] = useState(false);
  const [txtModalAddProjectTitle, setTxtModalAddProjectTitle] = useState('');

  // ------------------------------

  // adds a new project entry. Triggered by add project modal window
  function saveProject() {
    // creates a new project entry
    let newProject: ProjectEntity = {
      projectId: projectsList.length + 1,
      title: txtModalAddProjectTitle,
    };
    // propert way to add an item to an array and re-render state
    setProjectsList([...projectsList, newProject]);

    // clears textbox input and closes the modal window
    setTxtModalAddProjectTitle('');
    cancelAddProjectModal();
  }

  function showAddProjectModal() {
    setShowModalAddProject(true);
  }
  function cancelAddProjectModal() {
    setShowModalAddProject(false);
  }
  function onTxtTitleChange(e) {
    setTxtModalAddProjectTitle(e.target.value);
  }

  // ------------------------------

  function selectProject(projectId) {
    setSelectedProjectId(projectId);
  }

  return (
    <div>
      DASHBOARD
      <ProjectsListPane
        listProjects={projectsList}
        onAddProjectClick={showAddProjectModal}
        selectedProjectId={selectedProjectId}
        onSelectProjectClick={selectProject}
      />
      <ProjectsAddModal
        showModal={showModalAddProject}
        onProjectAdd={saveProject}
        txtTitle={txtModalAddProjectTitle}
        onTxtTitleChange={onTxtTitleChange}
        onCancel={cancelAddProjectModal}
      />
    </div>
  );
}

export default Dashboard;
