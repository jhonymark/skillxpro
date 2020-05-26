import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrowseCoursePage } from './browse-course.page';

const routes: Routes = [
  {
    path: '',
    component: BrowseCoursePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrowseCoursePageRoutingModule {}
