import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";

@Component({
  selector: 'app-browse-course',
  templateUrl: './browse-course.page.html',
  styleUrls: ['./browse-course.page.scss'],
})
export class BrowseCoursePage implements OnInit {

  constructor( private location: Location) { }

goBack() {
    this.location.back();
}
  ngOnInit() {
  }

}
