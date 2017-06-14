import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { ApiService } from "../../services/api.service";
import { User } from "../../models/User";
import { AppSettings } from "../../shared/app.settings";
import { Http, Headers } from "@angular/http";
import { AuthService } from "../../services/auth.service";
import { PetsListPage } from "../pets-list/pets-list";
import { ToastService } from "../../services/toast.service";


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  userName: string="admin";
  password: string="password";


  constructor(private navCtrl: NavController, private navParams: NavParams, private _authService: AuthService, private _toastService: ToastService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(): void {
    this._authService.login(this.userName, this.password).subscribe(res => {
      let response: any = res;
      sessionStorage.token = JSON.parse(response._body).access_token;
      sessionStorage.username = JSON.parse(response._body).username;
      this.navCtrl.setRoot(PetsListPage);
    }, error => {
      let response: any = error;
      this._toastService.showError(JSON.parse(response._body).error_description);
    });
  }

}


