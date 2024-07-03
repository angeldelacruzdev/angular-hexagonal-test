import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListTasksComponent } from './components/list-tasks.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TaskUseCase } from '../application';
import { TaskRepository } from '../application/repositories/task.repository';
import { TaskRepositoryImpl } from '../infrastructure/repositories/task.repository.impl';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { CreateTaskUseCase } from '../application/use-cases/create-task.use-case';

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
