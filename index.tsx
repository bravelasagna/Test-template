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

  // happens when the "edit" project is clicked
  function handleEditProject(projectId) {
    setCurrentProjectIdState(projectId);
    setIsEditProjectState(true);
    setCurrentTaskIdState('');
    setIsEditTaskState(false);
    console.log('current project is set to:' + projectId);
  }

  // renders the input to change the project title only when the "edit" button is clicked (or "add")
  function RenderEditProjectPanel() {
    let existingProjectTitle = '';
    if (currentProjectIdState > 0) {
      existingProjectTitle = dataListProjectsState.find(
        (project) => project.projectId === currentProjectIdState
      ).title;
    }
    if (isEditProjectState) {
      return (
        <EditProjects
          onProjectSaved={handleProjectSaved}
          existingProjectTitle={existingProjectTitle}
        ></EditProjects>
      );
    }
  }

  // happens when the 'Save' button is clicked in the projects list (add or update)
  function handleProjectSaved(projectTitle) {
    // if there is no selected project, then we add a new project item
    console.log(currentProjectIdState);
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
    console.log('current task is set to:' + taskId);
  }

  function returnDataListTasksCurrentProject() {
    let tasksList = [];
    if (currentProjectIdState > 0) {
      tasksList = dataListProjectsState.find(
        (project) => project.projectId === currentProjectIdState
      ).tasks;
    }
    return tasksList;
  }

  // renders the input to change the task title only when the "edit" button is clicked (or "add")
  function RenderEditTaskPanel() {
    let existingTaskTitle = '';
    if (currentTaskIdState != '') {
      let currentProject = dataListProjectsState.find(
        (project) => project.projectId === currentProjectIdState
      );
      existingTaskTitle = currentProject.tasks.find(
        (task) => task.taskId == currentTaskIdState
      ).title;
    }
    if (isEditTaskState) {
      return (
        <EditTasks
          onTaskSaved={handleTaskSaved}
          existingTaskTitle={existingTaskTitle}
        ></EditTasks>
      );
    }
  }

  // happens when the 'Save' button is clicked in the tasks list (add or update)
  function handleTaskSaved(taskTitle) {
    // if there is no selected task, then we add a new project item
    if (currentTaskIdState == '') {
      let currentProject = dataListProjectsState.find(
        (project) => project.projectId === currentProjectIdState
      );
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
      let currentProject = dataListProjectsState.find(
        (project) => project.projectId === currentProjectIdState
      );
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
      <ListProjects
        onProjectSelectClick={handleSelectProject}
        onProjectEditClick={handleEditProject}
        dataListProjects={dataListProjectsState}
        currentProjectId={currentProjectIdState}
      ></ListProjects>
      <RenderEditProjectPanel></RenderEditProjectPanel>
      <ListTasks
        onTaskEditClick={handleOnTaskEditClick}
        dataListTasks={returnDataListTasksCurrentProject()}
      ></ListTasks>
      <RenderEditTaskPanel></RenderEditTaskPanel>
    </div>
  );
}

// MAIN RENDERING
root.render(
  <StrictMode>
    <App></App>
  </StrictMode>
);
