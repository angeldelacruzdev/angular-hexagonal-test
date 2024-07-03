import { Component, inject, Inject, OnInit } from '@angular/core';
import { Task } from '@/core/task/application';

import { TaskUseCase } from '../../application/use-cases/task.use-case';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
})
export class ListTasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskUseCase: TaskUseCase) {}

  ngOnInit() {
    this.loadTasks();
  }

  loadTasks(): void {
    this.taskUseCase.execute().subscribe((data) => {
      this.tasks = data;
    });
  }
}
