import * as React from 'react';
import { useState } from 'react';

import LocalData from '../data/localData';

import { ProjectEntity } from '../data/projectEntity';
import { TaskEntity } from '../data/taskEntity';

import ProjectsListPane from './ProjectsListPane';
import ProjectsAddModal from './ProjectsAddModal';
import TasksListPane from './TasksListPane';
import TasksAddModal from './TasksAddModal';

function Dashboard() {
  // loading local data and stores it into state
  let localData = new LocalData();
  let dbProjectsList: ProjectEntity[] = localData.returnLocalDataProjects();

  // generic
  const [projectsList, setProjectsList] = useState(dbProjectsList);
  const [selectedProject, setSelectedProject] = useState(dbProjectsList[0]);
  const [selectedTask, setSelectedTask] = useState(null);

  // modal add project
  const [showModalAddProject, setShowModalAddProject] = useState(false);
  const [txtModalAddProjectTitle, setTxtModalAddProjectTitle] = useState('');

  // modal add task
  const [showModalAddTask, setShowModalAddTask] = useState(false);
  const [txtModalAddTaskTitle, setTxtModalAddTaskTitle] = useState('');

  // ------------------------------

  // adds a new project entry. Triggered by add project modal window
  function saveProject() {
    // creates a new project entry
    let newProject: ProjectEntity = {
      projectId: projectsList.length + 1,
      title: txtModalAddProjectTitle,
      tasks: [],
    };
    // propert way to add an item to an array and re-render state
    setProjectsList([...projectsList, newProject]);

    // clears textbox input and closes the modal window
    setTxtModalAddProjectTitle('');
    cancelAddProjectModal();
  }

  function showAddProjectModal() {
    setShowModalAddProject(true);
  }
  function cancelAddProjectModal() {
    setShowModalAddProject(false);
  }
  function onTxtTitleChange(e) {
    setTxtModalAddProjectTitle(e.target.value);
  }

  // ------------------------------

  function selectProject(project) {
    setSelectedProject(project);
  }

  // ------------------------------

  function selectTask(task) {
    setSelectedTask(task);
  }

  // ------------------------------
  // adds a new task to the current project. Triggered by add task modal window
  function saveTask() {
    let newTask: TaskEntity = {
      taskId:
        selectedProject.projectId + '-' + (selectedProject.tasks.length + 1),
      projectId: selectedProject.projectId,
      title: txtModalAddTaskTitle,
      description: '',
    };

    selectedProject.tasks = [...selectedProject.tasks, newTask];
    setProjectsList(projectsList);

    cancelAddTaskModal();
  }
  function showAddTaskModal() {
    setShowModalAddTask(true);
  }
  function onTxtTitleTaskChange(e) {
    setTxtModalAddTaskTitle(e.target.value);
  }
  function cancelAddTaskModal() {
    setShowModalAddTask(false);
  }

  return (
    <div className="row">
      <div className="col-4">
        DASHBOARD
        <ProjectsListPane
          listProjects={projectsList}
          onAddProjectClick={showAddProjectModal}
          selectedProject={selectedProject}
          onSelectProjectClick={selectProject}
        />
        <ProjectsAddModal
          showModal={showModalAddProject}
          onProjectAdd={saveProject}
          txtTitle={txtModalAddProjectTitle}
          onTxtTitleChange={onTxtTitleChange}
          onCancel={cancelAddProjectModal}
        />
      </div>
      <div className="col-8">
        <TasksListPane
          currentProject={selectedProject}
          onSelectTaskClick={selectTask}
          onAddTaskClick={showAddTaskModal}
        />
        <TasksAddModal
          showModal={showModalAddTask}
          onTaskAdd={saveTask}
          txtTitle={txtModalAddTaskTitle}
          onTxtTitleChange={onTxtTitleTaskChange}
          onCancel={cancelAddTaskModal}
        />
      </div>
    </div>
  );
}

export default Dashboard;
