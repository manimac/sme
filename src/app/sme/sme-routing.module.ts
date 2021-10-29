import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SmeComponent } from './sme.component';
import { Sme2Component } from './sme2/sme2.component';

const routes: Routes = [
  {
    path: 'sme', component: SmeComponent
  },
  {
    path: 'sme2', component: Sme2Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SmeRoutingModule { }
