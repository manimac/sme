import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio.component';
import { MyholdingsComponent } from './myholdings/myholdings.component';
import { AssetallocationComponent } from './assetallocation/assetallocation.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { TransactComponent } from './shared/transact/transact.component';
import { PortfolioRoutingModule } from './portfolio-routing.module';


@NgModule({
  declarations: [PortfolioComponent, MyholdingsComponent, AssetallocationComponent, TransactComponent],
  exports: [PortfolioComponent,PortfolioComponent,MyholdingsComponent,AssetallocationComponent],
  imports: [
    CommonModule,
    NgbModule,
    PortfolioRoutingModule,
  ]
})
export class PortfolioModule { }
