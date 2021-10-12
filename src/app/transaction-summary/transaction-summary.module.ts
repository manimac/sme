import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionSummaryRoutingModule } from './transaction-summary-routing.module';
import { TransactionSummaryComponent } from './transaction-summary.component';
import { LatestTransactionComponent } from './latest-transaction/latest-transaction.component';
import { UpcomingTransactionComponent } from './upcoming-transaction/upcoming-transaction.component';


@NgModule({
  declarations: [TransactionSummaryComponent, LatestTransactionComponent, UpcomingTransactionComponent],
  imports: [
    CommonModule,
    TransactionSummaryRoutingModule
  ]
})
export class TransactionSummaryModule { }
