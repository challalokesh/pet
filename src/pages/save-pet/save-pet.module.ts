import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SavePetPage } from './save-pet';

@NgModule({
  declarations: [
    SavePetPage,
  ],
  imports: [
    IonicPageModule.forChild(SavePetPage),
  ],
  exports: [
    SavePetPage
  ]
})
export class SavePetPageModule {}
