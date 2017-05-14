import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PetComponent } from 'app/pet/pet.component';
import { AdminComponent } from 'app/admin/admin.component';
import { AppComponent } from 'app/app.component';
import { DashboardComponent } from 'app/dashboard/dashboard.component';

const routes: Routes = [
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
