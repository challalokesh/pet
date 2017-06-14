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
export class ApiService {

  private headers;
  private loading: Loading;

  constructor(private http: Http,
    public _toastService: ToastService, private loadingCtrl: LoadingController

  ) { }

  public baseUrl = "http://localhost:8080/in4me/api/v1";

  addToken() {
    this.headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + sessionStorage.token })
  }


  get(url: string, params: any) {
    this.addToken();
    return this.http.get(this.baseUrl + url, { headers: this.headers })
      .map((response) => this.processResponse(response.json(), this))
      .catch(error => this.processError(error, this));

  }

  post(url: string, params: any) {
    this.addToken();
    const body = JSON.stringify(params);
    return this.http
      .post(`${this.baseUrl + url}`, body, { headers: this.headers })
      .map((response) => this.processResponse(response.json(), this))
      .catch(error => this.processError(error, this));
  }

  put(url: string, params: any) {
    this.addToken();
    const body = JSON.stringify(params);
    return this.http
      .put(`${this.baseUrl + url}`, body, { headers: this.headers })
      .map((response) => this.processResponse(response.json(), this))
      .catch(error => this.processError(error, this));
  }

  delete(url: string, params: any) {
    this.addToken();
    return this.http.delete(this.baseUrl + url, { headers: this.headers })
      .map((response) => this.processResponse(response.json(), this))
      .catch(error => this.processError(error, this));
  }
  //process reponse
  processResponse(result, apiService) {
    //apiService.loading.dismiss();
    let toastr = apiService._toastService;
    if (result.feedback == null && result.payload !== null) {
      return result.payload;
    }
    else if (result.feedback !== null) {
      let level = result.feedback.level;
      let message = result.feedback.message;
      let code = result.feedback.code ? result.feedback.code : "";
      let messageCode = code + " " + message;
      if (level === AppSettings.INFO) {
        toastr.showInformation(messageCode);
      }
      else if (level === AppSettings.WARNING) {
        toastr.showWarning(messageCode);
      }
      else {
        toastr.showError(messageCode);
      }
    }
    else {
      toastr.showError(AppSettings.UNKNOWN_ERROR);
    }


  }

  //process error
  processError(error, apiService) {
    let toastr = apiService._toastService;
    if (error.status == "401" || error.status == "403" || error.status == 0) {
      toastr.showError("Login Page");
    }
    else if (error.status == "500") {
      toastr.showError(AppSettings.UNKNOWN_ERROR);
    }
    else if (JSON.parse(error._body).feedback !== null) {
      let feedbackObj = JSON.parse(error._body).feedback;
      let level = feedbackObj.level;
      let message = feedbackObj.message;
      let code = feedbackObj.code ? feedbackObj.code : "";
      let messageCode = code + " " + message;
      if (level === AppSettings.INFO) {
        toastr.showInformation(messageCode);
      }
      else if (level === AppSettings.WARNING) {
        toastr.showWarning(messageCode);
      }
      else {
        toastr.showError(messageCode);
      }
    }
    else {
      toastr.showError(AppSettings.UNKNOWN_ERROR);
    }


    return Promise.reject(error.message || error);
  }


  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

}
