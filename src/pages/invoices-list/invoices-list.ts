import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { AppSettings } from "../../shared/app.settings";


@IonicPage()
@Component({
  selector: 'page-invoices-list',
  templateUrl: 'invoices-list.html',
})
export class InvoicesListPage {
pageTitle:string=AppSettings.PAGETITLE_INVOICESLIST;

  constructor() {
  }


}
