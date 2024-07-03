import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListTasksComponent } from './components/list-tasks.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TaskUseCase } from '../application';
import { TaskRepository } from '../application/repositories/task.repository';
import { TaskRepositoryImpl } from '../infrastructure/repositories/task.repository.impl';

@NgModule({
  declarations: [ListTasksComponent],
  imports: [CommonModule, RouterLink, RouterOutlet],
  providers: [
    {
      provide: TaskUseCase,
      useFactory: (taskRepository: TaskRepository) => {
        return new TaskUseCase(taskRepository);
      },
      deps: [TaskRepositoryImpl],
    },
  ],
})
export class TaskModule {}
