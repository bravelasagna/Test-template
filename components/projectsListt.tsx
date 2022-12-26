import * as React from 'react';

export default function ListProjects(projects) {
  return (
    <div>
      {projects.dataListProjects.map((project) => {
        return <li key={project.projectId}>{project.title}</li>;
      })}
    </div>
  );
}