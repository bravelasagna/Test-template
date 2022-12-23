import * as React from 'react';
import { useState } from 'react';

import LocalData from '../data/localData';

import { ProjectEntity } from '../data/projectEntity';
import { TaskEntity } from '../data/taskEntity';

import ProjectsListPane from './ProjectsListPane';
import ProjectsAddModal from './ProjectsAddModal';
import TasksListPane from './TasksListPane';
import TasksEditModal from './TasksEditModal';
import DeleteConfirmModal from './DeleteConfirmModal';

function Dashboard() {
  // loading local data and stores it into state
  let localData = new LocalData();
  let dbProjectsList: ProjectEntity[] = localData.returnLocalDataProjects();

  const openTaskModalFunc = React.useRef(null);

  // generic
  const [projectsList, setProjectsList] = useState(dbProjectsList);
  const [selectedProject, setSelectedProject] = useState(dbProjectsList[0]);
  const [selectedTask, setSelectedTask] = useState<TaskEntity>({
    title: '',
    projectId: 0,
    description: '',
    taskId: '',
  });

  // modal add project
  const [showModalAddProject, setShowModalAddProject] = useState(false);
  const [txtModalAddProjectTitle, setTxtModalAddProjectTitle] = useState('');

  // modal add task
  const [showModalEditTask, setShowModalEditTask] = useState(false);
  const [modeModalEditTask, setModeModalEditTask] = useState('add');
  const [txtModalEditTaskTitle, setTxtModalEditTaskTitle] = useState('');

  // modal confirm delete
  const [showModalConfirmDelete, setShowModalConfirmDelete] = useState(false);
  const [textModalConfirmDelete, setTextShowModalConfirmDelete] = useState('');

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
    setTxtModalAddProjectTitle('');
    setShowModalAddProject(true);
  }
  function cancelAddProjectModal() {
    setTxtModalAddProjectTitle('');
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
  // adds a new task to the current project. Triggered by add task modal window
  function saveTask() {
    console.log(selectedTask);

    if (modeModalEditTask == 'add') {
      let newTask: TaskEntity = {
        taskId:
          selectedProject.projectId + '-' + (selectedProject.tasks.length + 1),
        projectId: selectedProject.projectId,
        title: selectedTask.title,
        description: '',
      };

      selectedProject.tasks = [...selectedProject.tasks, newTask];
      setProjectsList(projectsList);
    }

    if (modeModalEditTask == 'edit') {
      const modifiedTasks = selectedProject.tasks.map((task) => {
        if (task.taskId == selectedTask.taskId) {
          return { ...task, selectedTask };
        }
        return task;
      });

      selectedProject.tasks = modifiedTasks;
      setProjectsList(projectsList);
    }

    cancelEditTaskModal();
  }
  function editTaskClicked(task) {
    setSelectedTask(task);
    setModeModalEditTask('edit');
    openTaskModalFunc.current();
    return;
  }

  function addTaskClicked() {
    setSelectedTask({});
    setModeModalEditTask('add');
    openTaskModalFunc.current();
    return;
  }

  function onTxtTitleTaskChange(e) {
    setTxtModalEditTaskTitle(e.target.value);
  }
  function cancelEditTaskModal() {
    setTxtModalEditTaskTitle('');
    setShowModalEditTask(false);
  }
  function deleteTask() {
    const modifiedTasks = selectedProject.tasks.filter(function (task) {
      return task.taskId !== selectedTask.taskId;
    });

    selectedProject.tasks = modifiedTasks;
    setProjectsList(projectsList);
  }

  // ------------------------------------
  // DELETE CONFIRM
  function showDeleteConfirmModal() {
    setShowModalConfirmDelete(true);
    setShowModalEditTask(false);
  }
  function confirmDeleteConfirmModal() {
    deleteTask();
    setShowModalConfirmDelete(false);
  }
  function cancelDeleteConfirmModal() {
    setShowModalEditTask(true);
    setShowModalConfirmDelete(false);
  }
  // ------------------------------------

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
          onEditTaskClick={editTaskClicked} // ok
          onAddTaskClick={addTaskClicked} // ok
        />
        <TasksEditModal
          onTaskSave={saveTask}
          txtTitle={txtModalEditTaskTitle}
          onCancel={cancelEditTaskModal}
          mode={modeModalEditTask}
          onDelete={showDeleteConfirmModal}
          openModalRef={openTaskModalFunc}
          task={selectedTask}
        />
      </div>
      <DeleteConfirmModal
        showModal={showModalConfirmDelete}
        onCancel={cancelDeleteConfirmModal}
        onConfirm={confirmDeleteConfirmModal}
      ></DeleteConfirmModal>
    </div>
  );
}

export default Dashboard;
