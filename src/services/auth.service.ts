import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { ToastService } from "./toast.service";
import { AppSettings } from "../shared/app.settings";
import { LoginPage } from "../pages/login/login";
import { LoadingController, Loading } from "ionic-angular";


@Injectable()
export class AuthService {

    loading;
    private headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Basic YWNtZTpzb21lX3NlY3JldA==' });
    constructor(private http: Http, private loadingCtrl: LoadingController) {
    }

    login(userName, password) {
        this.showLoading();
        var url = AppSettings.OAUTH_URL + "&username=" + userName + "&password=" + password;
        return this.http
            .post(url, "", { headers: this.headers })
            .catch(error => {
                this.loading.dismiss();
                return Promise.reject(error)
            });
    }

    logout() {
        sessionStorage.token = "";
    }


    showLoading() {
        this.loading = this.loadingCtrl.create({
            content: 'signing you in...',
            dismissOnPageChange: true
        });
        this.loading.present();
    }

}
