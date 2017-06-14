import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InvoicesListPage } from './invoices-list';

@NgModule({
  declarations: [
    InvoicesListPage,
  ],
  imports: [
    IonicPageModule.forChild(InvoicesListPage),
  ],
  exports: [
    InvoicesListPage
  ]
})
export class InvoicesListPageModule {}
