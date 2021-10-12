import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExploreFundsRoutingModule } from './explore-funds-routing.module';
import { ExploreFundComponent } from './explore-fund.component';


@NgModule({
  declarations: [ExploreFundComponent],
  imports: [
    CommonModule,
    ExploreFundsRoutingModule
  ]
})
export class ExploreFundsModule { }
