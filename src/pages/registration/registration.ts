import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";
import { LoginPage } from "../login/login";

@IonicPage()
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html',
})
export class RegistrationPage implements OnInit {

  pageTitle = "Register a new account";
  titles = ['Mr', 'Mrs'];
  
  states = ['Texas', 'Ohio', 'Florida'];
  countries = ['US', 'Canada', 'India'];


  registrationForm: FormGroup;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit() {
    this.initializeForm();
  }
  login() {
    this.navCtrl.push(LoginPage);
  }

  onSubmit(form) {
    alert("POST Object: "+JSON.stringify(form.value));
  }

  private initializeForm() {
    this.registrationForm = new FormGroup({
      'firstName': new FormControl(null, Validators.required),
      'middleInitial': new FormControl(null),
      'lastName': new FormControl(null, Validators.required),
      'userName': new FormControl(null, [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+')]),
      'password': new FormControl(null, Validators.required),
      'phoneNumberCell': new FormControl(null, Validators.required),
      'address': new FormControl(null),
      'city': new FormControl(null),
      'state': new FormControl(null),
      'postalCode': new FormControl(null),
      'country': new FormControl(null)
    });
  }

}
