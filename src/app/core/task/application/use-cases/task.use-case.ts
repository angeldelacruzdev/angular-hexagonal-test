import { Observable } from 'rxjs';
import { TaskRepository } from '../repositories';

import { UseCase } from '@/core/base/use-case';
import { Task } from '../models';

export class TaskUseCase implements UseCase<void, Task[]> {
  constructor(private taskRepository: TaskRepository) {}

  execute(params: void): Observable<Task[]> {
    return this.taskRepository.getTasks();
  }
}
