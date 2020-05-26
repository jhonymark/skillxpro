import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PopularCoursePage } from './popular-course.page';

const routes: Routes = [
  {
    path: '',
    component: PopularCoursePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PopularCoursePageRoutingModule {}
