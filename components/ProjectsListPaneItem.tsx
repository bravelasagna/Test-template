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
      <a onClick={() => onSelectProjectClick(project)} href='#'>
        {project.title} - {selectedText}
      </a>
    </div>
  );
}
