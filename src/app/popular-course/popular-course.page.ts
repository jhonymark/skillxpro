import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";

@Component({
  selector: 'app-popular-course',
  templateUrl: './popular-course.page.html',
  styleUrls: ['./popular-course.page.scss'],
})
export class PopularCoursePage implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }
  goBack() {
    this.location.back();
}
}
