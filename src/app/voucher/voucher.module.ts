import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VoucherRoutingModule } from './voucher-routing.module';
import { SaleComponent } from './sale/sale.component';
import { SharedModule } from '../shared/shared.module';
import { LandingComponent } from './landing.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SaleComponent,
    LandingComponent
  ],
  imports: [
    CommonModule,
    VoucherRoutingModule,
    SharedModule,
    FormsModule,
    // ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class VoucherModule { }
