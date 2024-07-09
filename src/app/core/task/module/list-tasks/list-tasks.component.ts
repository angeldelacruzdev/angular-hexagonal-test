import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { CreateTaskUseCase, TaskUseCase, Task } from '@/core/task/application';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogAlertMessageComponent } from '@/ui';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
})
export class ListTasksComponent implements OnInit {
  tasks: Task[] = [];

  taskForm = new FormGroup({
    description: new FormControl('', [Validators.required]),
    completed: new FormControl(false),
  });

  constructor(
    private taskUseCase: TaskUseCase,
    private createTaskUseCase: CreateTaskUseCase,
    public dialogRef: MatDialogRef<DialogAlertMessageComponent>
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

  handleDelete(id: string) {
    console.log(id);
  }

  openDialog() {
    this.dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
