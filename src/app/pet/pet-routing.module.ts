import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PetComponent } from 'app/pet/pet.component';
import { NewPetComponent } from 'app/pet/new-pet/new-pet.component';
import { Link1Component } from 'app/pet/link1/link1.component';

const routes: Routes = [
  {
    path: "pet", component: PetComponent,
    children: [
      { path: 'newpet', component: NewPetComponent },
      { path: 'link1', component: Link1Component }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PetRoutingModule { }
