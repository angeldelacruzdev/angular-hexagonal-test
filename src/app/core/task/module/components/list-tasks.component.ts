import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { CreateTaskUseCase, TaskUseCase, Task } from '@/core/task/application';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
})
export class ListTasksComponent implements OnInit {
  tasks: Task[] = [];

  taskForm = new FormGroup({
    description: new FormControl(''),
    completed: new FormControl(false),
  });

  constructor(
    private taskUseCase: TaskUseCase,
    private createTaskUseCase: CreateTaskUseCase
  ) {}

  ngOnInit() {
    this.loadTasks();
  }

  loadTasks(): void {
    this.taskUseCase.execute().subscribe((data) => {
      this.tasks = data;
    });
  }

  onSubmit() {
    this.createTaskUseCase
      .execute(this.taskForm.value as Task)
      .subscribe(() => {
        this.loadTasks();
        this.taskForm.reset();
      });
  }
}
