import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing.component';
import { SaleComponent } from './sale/sale.component';

const routes: Routes = [
  {path:"",component:LandingComponent, children:[
    {path:"sale", component:SaleComponent},
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VoucherRoutingModule { }
