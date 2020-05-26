import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopularCoursePageRoutingModule } from './popular-course-routing.module';

import { PopularCoursePage } from './popular-course.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopularCoursePageRoutingModule
  ],
  declarations: [PopularCoursePage]
})
export class PopularCoursePageModule {}
