import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  ionViewDidEnter(){
    var x = document.querySelector('ion-segment').querySelectorAll('ion-segment-button');
  for (var i = 0; i < x.length; i++) {
    x[i].shadowRoot.querySelector('.segment-button-indicator-background').setAttribute('style', 'background: #98D8F3;height:5px;border-radius:20px;');
  }
    
  }

}
