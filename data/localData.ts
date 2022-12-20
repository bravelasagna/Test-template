import { ProjectEntity } from './projectEntity';
import { TaskEntity } from './taskEntity';

// local data records for the Project Entity.
// A Project is a serie of Tasks that need to be accomplished to reach a specific goal.
export const dbProjectsList: ProjectEntity[] = [
  {
    projectId: 1,
    title: 'Project ABC',
  },
  {
    projectId: 1,
    title: 'Another Project',
  },
];

// local data records for the Task Entity.
// A Task represent an activity that must be executed. A Task is linked to an existing Project Entity.
export const dbTasksList: TaskEntity[] = [
  {
    taskId: 1,
    projectId: 1,
    title: 'Article 1',
    description: 'Author 1',
  },
  {
    taskId: 2,
    projectId: 1,
    title: 'Article 2',
    description: 'Author 2',
  },
  {
    taskId: 3,
    projectId: 2,
    title: 'Article 3',
    description: 'Author 3',
  },
];
