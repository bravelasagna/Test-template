import * as React from 'react';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { ProjectEntity } from '../data/projectEntity';
import ProjectsListPaneItem from './ProjectsListPaneItem';

class ProjectsListPaneOLD extends React.Component<
  { projectsListProp: ProjectEntity[] },
  { showModalAddProject: boolean; projectsListState: ProjectEntity[] }
> {
  private txtAddProjectTitle: React.RefObject<HTMLInputElement>;

  constructor(props) {
    super(props);

    this.state = {
      showModalAddProject: false,
      projectsListState: this.props.projectsListProp,
    };

    this.btnCreateProjectClicked = this.btnCreateProjectClicked.bind(this);
    this.btnModalEditProjectCancelClick =
      this.btnModalEditProjectCancelClick.bind(this);
    this.btnModalEditProjectSaveClick =
      this.btnModalEditProjectSaveClick.bind(this);
    this.hideModal = this.hideModal.bind(this);

    this.txtAddProjectTitle = React.createRef();
  }

  // opens the modal dialog to create a new project
  btnCreateProjectClicked() {
    // clears modal dialog content

    // shows the modal dialog
    this.setState({ showModalAddProject: true });
  }

  // closes the modal dialog without actions
  btnModalEditProjectCancelClick() {
    // closes modal dialog
    this.setState({ showModalAddProject: false });
  }

  // validates user's input and creates a new project record
  btnModalEditProjectSaveClick() {
    // validates user input

    // adds project in local database
    this.addProject();

    // closes modal dialog
    this.setState({ showModalAddProject: false });
  }

  // adds a new project entry. Triggered by add project modal window
  addProject() {
    // creates a new project entry
    let newProject: ProjectEntity = {
      projectId: 3,
      title: this.txtAddProjectTitle.current.value,
    };
    this.props.projectsListProp.push(newProject);
    this.setState({ projectsListState: this.props.projectsListProp });

    // clears textbox input and closes the modal window
    this.txtAddProjectTitle.current.value = '';
    this.setState({ showModalAddProject: true });
  }

  hideModal() {
    this.setState({ showModalAddProject: false });
  }

  render() {
    return (
      <div>
        {this.props.projectsListProp.map((project) => (
          <ProjectsListPaneItem key={project.projectId} project={project} />
        ))}
        <div>
          <button onClick={this.btnCreateProjectClicked}>Create Project</button>
        </div>
        <div
          className="modal show"
          style={{ display: 'block', position: 'initial' }}
        >
          <Modal show={this.state.showModalAddProject} onHide={this.hideModal}>
            <Modal.Header closeButton>
              <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <input type="text" ref={this.txtAddProjectTitle}></input>
            </Modal.Body>
            <Modal.Footer>
              <button onClick={this.btnModalEditProjectCancelClick}>
                Cancel
              </button>
              <button onClick={this.btnModalEditProjectSaveClick}>Save</button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    );
  }
}

export default ProjectsListPaneOLD;
