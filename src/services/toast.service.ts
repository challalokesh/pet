import { Injectable } from '@angular/core';
import { ToastController } from "ionic-angular";



@Injectable()
export class ToastService {

    constructor(
        private _toastr: ToastController) {
    }

    private informationOptions = {
        cssClass: "toastr-info",
        duration: 2000
    };
    private warningOptions = {
        showCloseButton: true,
        cssClass: "toastr-warning",
        duration: 50000
    };
    private errorOptions = {
        showCloseButton: true,
        cssClass: "toastr-error",
        duration: 50000
    };


    showInformation(message) {
        this.presentToast(this.informationOptions, message);
    }
    showWarning(message) {
        this.presentToast(this.warningOptions, message);
    }
    showError(message) {
        this.presentToast(this.errorOptions, message);
    }

    presentToast(options, message) {
        let finalOptions = {
            message: message,
            position: 'top'
        };
        if (options) {
            for (var prop in options) {
                if (options.hasOwnProperty(prop)) {
                    finalOptions[prop] = options[prop];
                }
            }
        }

        let toast = this._toastr.create(finalOptions);

        toast.onDidDismiss(() => {
            console.log('Dismissed toast');
        });

        toast.present();
    }



}
