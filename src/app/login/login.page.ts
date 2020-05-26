import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor() { }

addSelectorS(){
  
 var gall = document.getElementById("selectorS");
 gall.classList.add("selectorSelected");

 var gall = document.getElementById("selectorR");
 gall.classList.remove("selectorSelected");
}
addSelectorR(){
  
  var gall = document.getElementById("selectorR");
  gall.classList.add("selectorSelected");
 
  var gall = document.getElementById("selectorS");
  gall.classList.remove("selectorSelected");
 }

  ngOnInit() {
  }

}
