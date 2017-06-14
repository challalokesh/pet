import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PetsListPage } from "../pages/pets-list/pets-list";
import { InvoicesListPage } from "../pages/invoices-list/invoices-list";
import { AuthService } from "../services/auth.service";
import { PetService } from "../services/pet.service";
import { ApiService } from "../services/api.service";
import { LookupService } from "../services/lookup.service";
import { ToastService } from "../services/toast.service";
import { LoginPage } from "../pages/login/login";
import { PageheadComponent } from '../components/pagehead/pagehead';
import { SavePetPage } from "../pages/save-pet/save-pet";
import { RegistrationPage } from "../pages/registration/registration";



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PetsListPage,
    SavePetPage,
    InvoicesListPage,
    LoginPage,
    PageheadComponent,
    RegistrationPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PetsListPage,
    SavePetPage,
    InvoicesListPage,
    LoginPage,
    RegistrationPage

  ],
  providers: [
    StatusBar,
    SplashScreen,

    AuthService,
    ApiService,
    
    LookupService,
    PetService,
    ToastService,

    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
