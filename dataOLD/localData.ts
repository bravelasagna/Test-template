import { ProjectEntity } from './projectEntity';
import { TaskEntity } from './taskEntity';

// local data records for the Project Entity.
// A Project is a serie of Tasks that need to be accomplished to reach a specific goal.
export const LocalData = [
  {
    projectId: 1,
    title: 'Famiglia',
    tasks: [
      {
        taskId: '1-1',
        projectId: 1,
        title: 'Andare in lavanderia',
        description: 'Author 1',
      },
      {
        taskId: '1-2',
        projectId: 1,
        title: 'Pagare F24',
        description: 'Author 1',
      },
    ],
  },
  {
    projectId: 2,
    title: 'Formazione',
    tasks: [
      {
        taskId: '2-1',
        projectId: 2,
        title: 'Finire corso React',
        description: 'Author 1',
      },
    ],
  },
];
