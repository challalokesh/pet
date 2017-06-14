import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PetsListPage } from "../pets-list/pets-list";
import { AppSettings } from "../../shared/app.settings";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
pageTitle:string=AppSettings.PAGETITLE_HOME;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

navigateToPetsList():void{
  this.navCtrl.push(PetsListPage);
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
