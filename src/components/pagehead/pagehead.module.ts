import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PageheadComponent } from './pagehead';

@NgModule({
  declarations: [
    PageheadComponent,
  ],
  imports: [
    IonicPageModule.forChild(PageheadComponent),
  ],
  exports: [
    PageheadComponent
  ]
})
export class PageheadComponentModule {}
