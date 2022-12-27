import { StrictMode, useState } from 'react';
import React = require('react');

export default function ListProjects({
  onProjectSelectClick,
  onProjectEditClick,
  dataListProjects,
  currentProjectId, 
}) {
  function projectSelectOnClick(projectId) {
    onProjectSelectClick(projectId);
  }

  function projectEditOnClick(projectId) {
    onProjectEditClick(projectId);
  }

  function handleAddProjectClick() {
    onProjectSelectClick(0);
    onProjectEditClick(0);
  }

  return (
    <div>
      {dataListProjects.map((project) => {
        let projectTitle = project.title;
        if (project.projectId == currentProjectId) {
          projectTitle += '<--';
        }
        return (
          <li key={project.projectId}>
            {projectTitle}
            <button onClick={(e) => projectSelectOnClick(project.projectId)}>
              Select
            </button>
            <button onClick={(e) => projectEditOnClick(project.projectId)}>
              Edit
            </button>
          </li>
        );
      })}
      <button onClick={handleAddProjectClick}>Add Project</button>
    </div>
  );
}
