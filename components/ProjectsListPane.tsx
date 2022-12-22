import * as React from 'react';
import ProjectsListPaneItem from './ProjectsListPaneItem';

export default function ProjectsListPane({
  listProjects,
  onAddProjectClick,
  selectedProject,
  onSelectProjectClick,
}) {
  return (
    <div>
      <span>List of Projects</span>
      {listProjects.map((project) => {
        let isSelected = false;
        if (project.projectId == selectedProject.projectId) {
          isSelected = true;
        }
        return (
          <ProjectsListPaneItem
            key={project.projectId}
            project={project}
            isSelectedProject={isSelected}
            onSelectProjectClick={onSelectProjectClick}
          />
        );
      })}
      <button onClick={onAddProjectClick}>Add New Project</button>
    </div>
  );
}
