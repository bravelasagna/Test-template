import { TaskEntity } from './taskEntity';

export interface ProjectEntity {
  projectId: number;
  title: string;
  tasks: TaskEntity[];
}
