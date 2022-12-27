import { StrictMode, useState } from 'react';
import React = require('react');
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { GrEdit } from 'react-icons/gr';

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
      <ListGroup>
        {dataListProjects.map((project) => {
          let projectTitle = project.title;
          let itemClassName = 'project-item';
          if (project.projectId == currentProjectId) {
            itemClassName = 'project-item project-active';
          }
          return (
            <ListGroup.Item
              key={project.projectId}
              onClick={(e) => projectSelectOnClick(project.projectId)}
              className={itemClassName}
            >
              {project.title}
              <GrEdit onClick={(e) => projectEditOnClick(project.projectId)} />
            </ListGroup.Item>
          );
        })}
      </ListGroup>
      <Button variant="primary" size="sm" onClick={handleAddProjectClick}><GrEdit />Add Project</Button>
    </div>
  );
}
