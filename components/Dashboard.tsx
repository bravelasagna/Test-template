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
import { ProjectEntity } from '../data/projectEntity';
import ProjectsListPane from './ProjectsListPane';

class Dashboard extends React.Component<
  { projectsListProp: ProjectEntity[] },
  { projectsListState: ProjectEntity[] }
> {
  render() {
    return (
      <div>
        DASHBOARD
        <ProjectsListPane projectsListProp={this.props.projectsListProp} />
      </div>
    );
  }
}

export default Dashboard;
