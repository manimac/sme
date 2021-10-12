import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransactionSummaryComponent } from './transaction-summary.component';

const routes: Routes = [
  {
    path: 'transaction-summary', component: TransactionSummaryComponent
    ,
    // children: [
    //   { path: 'login', component: LoginComponent },
    //   { path: 'register', component: RegisterComponent }
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionSummaryRoutingModule { }
