import { StrictMode, useState } from 'react';
import React = require('react');
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { GrEdit } from 'react-icons/gr';

export default function ListProjects({
  onProjectSelectClick,
  onProjectAddClick,
  dataListProjects,
  currentProjectId,
}) {
  function projectSelectOnClick(projectId) {
    onProjectSelectClick(projectId);
  }
  function handleAddProjectClick() {
    onProjectAddClick();
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
              
            </ListGroup.Item>
          );
        })}
      </ListGroup>
      <Button variant="primary" size="sm" onClick={handleAddProjectClick}><GrEdit />Add Project</Button>
    </div>
  );
}
