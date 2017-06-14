import { Component, Input } from '@angular/core';
import { NavController } from "ionic-angular";
import { LoginPage } from "../../pages/login/login";

@Component({
  selector: 'pagehead',
  templateUrl: 'pagehead.html'
})
export class PageheadComponent {
  username;
  @Input() title:string;

  constructor(private navCtrl:NavController) {
    this.username=sessionStorage.username;
  }

  logout(){
    sessionStorage.clear();
    this.navCtrl.push(LoginPage);
  }

}
