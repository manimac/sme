import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PanVerifyComponent } from './forms/pan-verify/pan-verify.component';
import { PanComponent } from './forms/pan/pan.component';
import { SmeNewComponent } from './sme-new.component';

const routes: Routes = [
  {
    path: 'sme/pan', component: PanComponent
  },
  {
    path: 'sme/pan-verify', component: PanVerifyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SmeNewRoutingModule { }
