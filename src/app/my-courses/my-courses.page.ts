import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.page.html',
  styleUrls: ['./my-courses.page.scss'],
})
export class MyCoursesPage implements OnInit {

  constructor() { }

  ionViewDidEnter(){
    var x = document.querySelector('ion-segment').querySelectorAll('ion-segment-button');
  for (var i = 0; i < x.length; i++) {
    x[i].shadowRoot.querySelector('.segment-button-indicator-background').setAttribute('style', 'background: #98D8F3;height:5px;border-radius:20px;');
  }
    
  }

}
