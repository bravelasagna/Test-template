import { ProjectEntity } from './projectEntity';
import { TaskEntity } from './taskEntity';

// local data records for the Project Entity.
// A Project is a serie of Tasks that need to be accomplished to reach a specific goal.
export default class LocalData {
  returnLocalDataProjects() {
    const dbProjectsList: ProjectEntity[] = [
      {
        projectId: 1,
        title: 'Famiglia',
      },
      {
        projectId: 2,
        title: 'Formazione Personale Dave',
      },
    ];
    return dbProjectsList;
  }
  returnLocalDataTasks() {
    const dbTasksList: TaskEntity[] = [
      {
        taskId: 1,
        projectId: 1,
        title: 'Andare in lavanderia',
        description: 'Author 1',
      },
      {
        taskId: 2,
        projectId: 1,
        title: 'Spedire raccomandata',
        description: 'Author 2',
      },
      {
        taskId: 6,
        projectId: 2,
        title: 'Finire il corso React JS',
        description: 'Author 3',
      },
    ];
    return dbTasksList;
  }
}
