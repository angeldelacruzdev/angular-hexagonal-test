import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ListTasksComponent } from './list-tasks.component';
import {
  CreateTaskUseCase,
  TaskRepository,
  TaskUseCase,
} from '../../application';
import { TaskRepositoryImpl } from '../../infrastructure';
import { DialogAlertMessageModule } from '@/ui';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [ListTasksComponent],
  imports: [
    CommonModule,
    RouterLink,
    RouterOutlet,
    ReactiveFormsModule,
    MatSlideToggleModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDialogModule,
    DialogAlertMessageModule,
  ],
  providers: [
    {
      provide: TaskUseCase,
      useFactory: (taskRepository: TaskRepository) => {
        return new TaskUseCase(taskRepository);
      },
      deps: [TaskRepositoryImpl],
    },
    {
      provide: CreateTaskUseCase,
      useFactory: (taskRepository: TaskRepository) => {
        return new CreateTaskUseCase(taskRepository);
      },
      deps: [TaskRepositoryImpl],
    },
  ],
})
export class TaskModule {}
