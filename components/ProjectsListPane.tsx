import * as React from 'react';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { ProjectEntity } from '../data/projectEntity';
import ProjectsListPaneItem from './ProjectsListPaneItem';

class ProjectsListPane extends React.Component<
  { projectsListProp: ProjectEntity[] },
  { show: boolean; projectsListState: ProjectEntity[] }
> {
  private txtAddProjectTitle: React.RefObject<HTMLInputElement>;

  constructor(props) {
    super(props);

    this.state = {
      show: false,
      projectsListState: this.props.projectsListProp,
    };

    this.addProject = this.addProject.bind(this);
    this.hideModal = this.hideModal.bind(this);

    this.txtAddProjectTitle = React.createRef();
  }

  addProject() {
    let newProject: ProjectEntity = {
      projectId: 3,
      title: this.txtAddProjectTitle.current.value,
    };
    this.props.projectsListProp.push(newProject);
    this.setState({ projectsListState: this.props.projectsListProp });
    this.txtAddProjectTitle.current.value = '';
    this.setState({ show: true });
  }

  hideModal() {
    this.setState({ show: false });
  }

  render() {
    return (
      <div>
        {this.props.projectsListProp.map((project) => (
          <ProjectsListPaneItem key={project.projectId} project={project} />
        ))}
        <div>
          <input type="text" ref={this.txtAddProjectTitle}></input>
          <button onClick={this.addProject}>Create Project</button>
        </div>
        <div
          className="modal show"
          style={{ display: 'block', position: 'initial' }}
        >
          <Modal show={this.state.show} onHide={this.hideModal}>
            <Modal.Header closeButton>
              <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>Modal body text goes here.</p>
            </Modal.Body>
            <Modal.Footer>
              <div>asdasd</div>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    );
  }
}

export default ProjectsListPane;
