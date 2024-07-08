import { Task, TaskDTO } from '../../application';

export class TaskMapper {
  static fromApiToDomain(apiTask: TaskDTO): Task {
    return {
      id: apiTask.id,
      description: apiTask.description,
      completed: apiTask.completed,
    };
  }

  static fromDomainToApi(domainTask: Task): TaskDTO {
    return {
      id: domainTask.id,
      description: domainTask.description,
      completed: domainTask.completed,
    };
  }
}
