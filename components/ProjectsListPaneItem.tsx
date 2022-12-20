import * as React from 'react';
import { useState } from 'react';
import { ProjectEntity } from '../data/projectEntity';

class ProjectsListPaneItem extends React.Component<
  { project: ProjectEntity },
  {}
> {
  render() {
    return (
      <div>
        {this.props.project.projectId} - {this.props.project.title}
      </div>
    );
  }
}

export default ProjectsListPaneItem;
