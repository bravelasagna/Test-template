/*
import * as React from 'react';
import { useState } from 'react';

import ProjectsListPaneItem from './ProjectsListPaneItem';

export default function ProjectsListPane() {
  return (
  <div>
    <ProjectsListPaneItem projectTitle="Project 1" />
    <ProjectsListPaneItem projectTitle="Project 2" />
    <ProjectsListPaneItem projectTitle="Project 3"/>
  </div>);
}
*/

import * as React from 'react';
import { useState } from 'react';
import { ProjectEntity } from '../data/projectEntity';

class ProjectsListPane extends React.Component<
  {projectsList: ProjectEntity[]}, 
  {}>
{

  render(){

    return(
      <div>
          {this.props.projectsList.map((project) => (
            <div>{project.title}</div>
          ))}
      </div>
    )
  }

}

export default ProjectsListPane;