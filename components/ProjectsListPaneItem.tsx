import * as React from 'react';
import { useState } from 'react';


class ProjectsListPaneItem extends React.Component<
  {projectTitle?: string}, 
  {}>
{

  render(){
    return(
        <div>
          Project Name {this.props.projectTitle}
        </div>
    )
  }

}

export default ProjectsListPaneItem;