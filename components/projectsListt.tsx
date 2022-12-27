import { StrictMode, useState } from 'react';
import React = require('react');

export default function ListProjects({ onProjectClick, dataListProjects}) {
  function projectOnClick(projectId) {
    onProjectClick(projectId);
  }

  return (
    <div>
      <button onClick={(e) => projectOnClick(1)}>Test</button>
      {dataListProjects.map((project) => {
        return (
          <li
            key={project.projectId}
            onClick={(e) => projectOnClick(project.projectId)}
          >
            {project.title}
          </li>
        );
      })}
    </div>
  );
}
