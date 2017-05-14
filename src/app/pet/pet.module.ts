import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PetRoutingModule } from './pet-routing.module';
import { PetComponent } from './pet.component';
import { NewPetComponent } from './new-pet/new-pet.component';
import { FormsModule } from '@angular/forms';
import { Link1Component } from './link1/link1.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';
import {MdSelectModule} from '@angular/material';
import {MdInputModule} from '@angular/material';
import { ToastModule } from "ng2-toastr/ng2-toastr";

@NgModule({
  imports: [
    CommonModule,
    PetRoutingModule,
    FormsModule,
    BrowserAnimationsModule,MdButtonModule, MdCheckboxModule,MdSelectModule,MdInputModule, ToastModule.forRoot()
  ],
  declarations: [PetComponent, NewPetComponent, Link1Component]
})
export class PetModule { }
