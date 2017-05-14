import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { CustomerService } from './customer.service';

@NgModule({
  imports: [
    CommonModule,
    CustomerRoutingModule
  ],
  declarations: [CustomerComponent],
  providers: [CustomerService]
})
export class CustomerModule { }
