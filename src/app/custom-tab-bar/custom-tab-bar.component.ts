import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { Router } from "@angular/router";

@Component({
  selector: "app-custom-tab-bar",
  templateUrl: "./custom-tab-bar.component.html",
  styleUrls: ["./custom-tab-bar.component.scss"]
})
export class CustomTabBarComponent implements OnInit {
  public gym: any;
  public location: any;
  public birth: any;
  public misc: any;

  constructor(public navCtrl: NavController, private router: Router) {}

  ngOnInit() {
    this.activateAll();
  }

  gotoGym() {
    this.navCtrl.navigateRoot("home");
  }
  gotoLocation() {
    this.navCtrl.navigateRoot("location");
  }
  gotoBirth() {
    this.navCtrl.navigateRoot("birth");
  }
  gotoMisc() {
    this.navCtrl.navigateRoot("misc");
  }

  

  public activateAll() {
    this.gym = "assets/icon/home.svg";
    this.location = "assets/icon/cource.svg";
    this.birth = "assets/icon/job.svg";
    this.misc = "assets/icon/account.svg";

   
  }
}
