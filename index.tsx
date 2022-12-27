import * as React from 'react';
import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LocalData } from './data/localData';
import { ProjectEntity } from './data/projectEntity';
import ListProjects from './components/projectsList';
import EditProjects from './components/projectsEdit';
import ListTasks from './components/tasksList';
import EditTasks from './components/tasksEdit';
import './style.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// MAIN APP
function App() {
  // INIT LOCAL DATA
  const [dataListProjectsState, setDataListProjectsState] = useState(LocalData);
  const [currentProjectIdState, setCurrentProjectIdState] = useState(1);
  const [currentTaskIdState, setCurrentTaskIdState] = useState('');
  const [isEditProjectState, setIsEditProjectState] = useState(false);
  const [isEditTaskState, setIsEditTaskState] = useState(false);

  // PROJECTS MANAGEMENT -------------------------
  // happens when a different project is selected in the projects list
  function handleSelectProject(projectId) {
    setCurrentProjectIdState(projectId);
    setCurrentTaskIdState('');
    setIsEditTaskState(false);
    console.log('current project is set to:' + projectId);
  }

  function handleAddProjectClick() {
    setCurrentProjectIdState(0);
    setIsEditProjectState(true);
    setCurrentTaskIdState('');
    setIsEditTaskState(false);
    console.log('current project is set to:' + 0);
  }

  // happens when the "edit" project is clicked
  function handleEditProject() {
    setIsEditProjectState(true);
    setCurrentTaskIdState('');
    setIsEditTaskState(false);
  }

  function handleProjectModalCancel() {
    setIsEditProjectState(false);
  }


  // renders the input to change the project title only when the "edit" button is clicked (or "add")
  function RenderEditProjectPanel() {
    let existingProjectTitle = '';
    if (currentProjectIdState > 0) {
      existingProjectTitle = returnCurrentProjectObject().title;
    }
    if (isEditProjectState) {
      return (
        <EditProjects
          onProjectSaved={handleProjectSaved}
          existingProjectTitle={existingProjectTitle}
          onClose={handleProjectModalCancel}
        ></EditProjects>
      );
    }
  }

  // happens when the 'Save' button is clicked in the projects list (add or update)
  function handleProjectSaved(projectTitle) {
    // if there is no selected project, then we add a new project item
    if (currentProjectIdState == 0) {
      let newProjectsArray = dataListProjectsState.slice();
      let newId = dataListProjectsState.length + 1;
      newProjectsArray.push({
        projectId: newId,
        title: projectTitle,
        tasks: [],
      });
      setDataListProjectsState(newProjectsArray);
      setIsEditProjectState(false);
      setCurrentProjectIdState(newId);
    } else {
      // there is a selected project, we edit the existing project details
      setDataListProjectsState((project) =>
        project.map((obj) => {
          if (obj.projectId === currentProjectIdState) {
            return { ...obj, title: projectTitle };
          }
          return obj;
        })
      );
      setIsEditProjectState(false);
    }
  }
  // PROJECTS MANAGEMENT -------------------------

  // TASKS MANAGEMENT -------------------------
  // happens when the "edit" task is clicked
  function handleOnTaskEditClick(taskId) {
    setCurrentTaskIdState(taskId);
    setIsEditTaskState(true);
  }

  function returnDataListTasksCurrentProject() {
    let tasksList = [];
    if (currentProjectIdState > 0) {
      tasksList = returnCurrentProjectObject().tasks;
    }
    return tasksList;
  }

  // renders the input to change the task title only when the "edit" button is clicked (or "add")
  function RenderEditTaskPanel() {
    let existingTaskTitle = '';
    if (currentTaskIdState != '') {
      let currentProject = returnCurrentProjectObject();
      existingTaskTitle = currentProject.tasks.find(
        (task) => task.taskId == currentTaskIdState
      ).title;
    }
    if (isEditTaskState) {
      return (
        <EditTasks
          onTaskSaved={handleTaskSaved}
          existingTaskTitle={existingTaskTitle}
          onClose={handleTaskModalCancel}
        ></EditTasks>
      );
    }
  }

  function handleTaskModalCancel() {
    setIsEditTaskState(false);
  }

  // happens when the 'Save' button is clicked in the tasks list (add or update)
  function handleTaskSaved(taskTitle) {
    // if there is no selected task, then we add a new project item
    if (currentTaskIdState == '') {
      let currentProject = returnCurrentProjectObject();
      let newTasksArray = currentProject.tasks.slice();
      let newId = newTasksArray.length + 1;
      newTasksArray.push({
        taskId: '' + newId,
        title: taskTitle,
        description: '',
        projectId: currentProjectIdState,
      });
      setDataListProjectsState(
        dataListProjectsState.map((obj) => {
          if (obj.projectId == currentProjectIdState) {
            return { ...obj, tasks: newTasksArray };
          }
          return obj;
        })
      );
      setIsEditTaskState(false);
      setCurrentTaskIdState('');
    } else {
      let currentProject = returnCurrentProjectObject();
      let newTasksList = currentProject.tasks.map((obj) => {
        if (obj.taskId == currentTaskIdState) {
          return { ...obj, title: taskTitle };
        }
        return obj;
      });
      setDataListProjectsState(
        dataListProjectsState.map((obj) => {
          if (obj.projectId == currentProjectIdState) {
            return { ...obj, tasks: newTasksList };
          }
          return obj;
        })
      );
      setIsEditTaskState(false);
      setCurrentTaskIdState('');
    }
  }
  // TASKS MANAGEMENT -------------------------

  return (
    <div>
      <div className="row">
        <div className="col-4">
          <ListProjects
            onProjectSelectClick={handleSelectProject}
            onProjectAddClick={handleAddProjectClick}
            dataListProjects={dataListProjectsState}
            currentProjectId={currentProjectIdState}
          ></ListProjects>
          <RenderEditProjectPanel></RenderEditProjectPanel>
        </div>
        <div className="col-8">
          <ListTasks
            onTaskEditClick={handleOnTaskEditClick}
            onProjectEditClick={handleEditProject}
            dataListTasks={returnDataListTasksCurrentProject()}
            projectTitle={returnCurrentProjectTitle()}
          ></ListTasks>
          <RenderEditTaskPanel></RenderEditTaskPanel>
        </div>
      </div>
    </div>
  );

  // COMMON
  // returns the full project entity that is currently set in the state
  function returnCurrentProjectTitle() {
    let currentProjectTitle = '';
    if (currentProjectIdState > 0) {
      currentProjectTitle = dataListProjectsState.find(
        (project) => project.projectId === currentProjectIdState
      ).title;
    }
    return currentProjectTitle;
  }

  // returns the title of the project that is currently set in the state
  function returnCurrentProjectObject() {
    let currentProject = null;
    if (currentProjectIdState > 0) {
      currentProject = dataListProjectsState.find(
        (project) => project.projectId === currentProjectIdState
      );
    }
    return currentProject;
  }
}

// MAIN RENDERING
root.render(
  <StrictMode>
    <App></App>
  </StrictMode>
);
