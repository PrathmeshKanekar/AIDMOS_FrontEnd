import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing.component';
import { TransactiontypesComponent } from './transactiontypes/transactiontypes.component';
import { GroupsComponent } from './groups/groups.component';
import { SchedulesComponent } from './schedules/schedules.component';
import { AccledgersComponent } from './accledgers/accledgers.component';
import { LedgerComponent } from './ledger/ledger.component';

const routes: Routes = [
  {path:"",component:LandingComponent,children:[
    {path:"transactiontypes",component:TransactiontypesComponent},
    {path:"groups",component:GroupsComponent},
    {path:"schedules",component:SchedulesComponent},
    {path:"ledgers",component:AccledgersComponent},
    {path:"ledger",component:LedgerComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountingRoutingModule { }
