import { Observable } from 'rxjs';

import { UseCase } from '@/core/base/use-case';
import { TaskRepository, Task } from '@/core/task/application';

export class CreateTaskUseCase implements UseCase<Task, Task> {
  constructor(private taskRepository: TaskRepository) {}

  execute(task: Task): Observable<Task> {
    return this.taskRepository.addTask(task);
  }
}
