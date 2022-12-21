import * as React from 'react';

export default function ProjectsListPaneItem({
  project,
  isSelectedProject,
  onSelectProjectClick,
}) {
  let selectedText = '';
  if (isSelectedProject) {
    selectedText = '***';
  }

  return (
    <div>
      <span>
        {project.projectId} - {project.title} - {selectedText}
      </span>
      <button
        className="btn btn-primary"
        onClick={() => onSelectProjectClick(project.projectId)}
      >
        SELECT
      </button>
    </div>
  );
}
