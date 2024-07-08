import { UseCase } from '@/core/base/use-case';
import { Observable } from 'rxjs';
import { Task } from '../models';

export class FindTaskUseCase implements UseCase<Task, Task> {
  execute(params: Task): Observable<Task> {
    throw new Error('Method not implemented.');
  }
}
