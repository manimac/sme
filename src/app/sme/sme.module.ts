import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SmeRoutingModule } from './sme-routing.module';
import { PanFormComponent } from './pan-form/pan-form.component';
import { KycFormComponent } from './kyc-form/kyc-form.component';
import { SmeComponent } from './sme.component';


@NgModule({
  declarations: [PanFormComponent, KycFormComponent, SmeComponent],
  imports: [
    CommonModule,
    SmeRoutingModule
  ]
})
export class SmeModule { }
