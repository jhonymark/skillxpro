import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrowseCoursePageRoutingModule } from './browse-course-routing.module';

import { BrowseCoursePage } from './browse-course.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrowseCoursePageRoutingModule
  ],
  declarations: [BrowseCoursePage]
})
export class BrowseCoursePageModule {}
