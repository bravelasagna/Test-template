/*
import * as React from 'react';
import { useState } from 'react';

import { ProjectEntity } from '../data/projectEntity';

import ProjectsListPane from './ProjectsListPane';

let a: ProjectEntity[];



export default function Dashboard() {
  return (
    <div>
      DASHBOARD
      <ProjectsListPane />
    </div>
  );
}
*/

import * as React from 'react';
import { useState } from 'react';
import LocalData from '../data/localData';
import { ProjectEntity } from '../data/projectEntity';
import ProjectsListPane from './ProjectsListPane';

function Dashboard() {
  // loading local data and stores it into state
  let localData = new LocalData();
  let dbProjectsList: ProjectEntity[] = localData.returnLocalDataProjects();
  const [projectsList, setprojectsList] = useState(dbProjectsList);

  return (
    <div>
      <span>these are the projs in the dashboad</span>
      {projectsList.map((project) => (
        <div>{project.projectId}</div>
      ))}
      --- <div></div>
      DASHBOARD
      <ProjectsListPane projectsListProp={projectsList} />
    </div>
  );
}

export default Dashboard;
