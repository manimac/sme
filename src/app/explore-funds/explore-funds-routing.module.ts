import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExploreFundComponent } from './explore-fund.component';
const routes: Routes = [
  {
    path: 'explore-funds', component: ExploreFundComponent
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
export class ExploreFundsRoutingModule { }
