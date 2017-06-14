import { Component, ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {  Nav } from 'ionic-angular';
import { HomePage } from '../pages/home/home';
import { PetsListPage } from "../pages/pets-list/pets-list";
import { InvoicesListPage } from "../pages/invoices-list/invoices-list";
import { LoginPage } from "../pages/login/login";
import { RegistrationPage } from "../pages/registration/registration";
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
    @ViewChild(Nav) nav: Nav;
     pages: Array<{title: string, component: any}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

 this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Pets', component: PetsListPage },
      { title: 'Invoices', component: InvoicesListPage },
       { title: 'Registration', component: RegistrationPage }
    ];

  }


openPage(page) {
    this.nav.setRoot(page.component);
  }

  logout(){
    sessionStorage.token="";
    this.nav.setRoot(LoginPage);
  }



}

