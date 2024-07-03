import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { Task, TaskDTO, TaskRepository } from '../../application';
import { HttpClient } from '@angular/common/http';
import { TaskMapper } from '../mappers';

@Injectable({
  providedIn: 'root',
})
export class TaskRepositoryImpl implements TaskRepository {
  private apiUrl = 'http://localhost:3001/tareas';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http
      .get<TaskDTO[]>(this.apiUrl)
      .pipe(map((apiTasks) => apiTasks.map(TaskMapper.fromApiToDomain)));
  }

  addTask(task: Task): Observable<Task> {
    const apiTask = TaskMapper.fromDomainToApi(task);
    return this.http
      .post<TaskDTO>(this.apiUrl, apiTask)
      .pipe(map(TaskMapper.fromApiToDomain));
  }

  updateTask(task: Task): Observable<void> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<void>(url, task);
  }

  deleteTask(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
