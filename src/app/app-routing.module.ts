import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { tastRoutes } from './core/task/module/list-tasks/tasks-routing.module';

const routes: Routes = [...tastRoutes];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
