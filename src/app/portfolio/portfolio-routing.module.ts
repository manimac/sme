import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortfolioComponent } from './portfolio.component';


const routes: Routes = [
  {
    path: '', component: PortfolioComponent
    ,
    // children: [
    //   { path: 'login', component: LoginComponent },
    //   { path: 'register', component: RegisterComponent }
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class PortfolioRoutingModule { }
