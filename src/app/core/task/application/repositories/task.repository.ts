import { Observable } from 'rxjs';
import { Task } from '../models/task.model';
import { InjectionToken } from '@angular/core';

export const TASK_REPOSITORY_TOKEN = new InjectionToken<TaskRepository>(
  'TASK_TOKEN'
);

export interface TaskRepository {
  getTasks(): Observable<Task[]>;
  addTask(task: Task): Observable<Task>;
  updateTask(task: Task): Observable<void>;
  deleteTask(id: number): Observable<void>;
}
