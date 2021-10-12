import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PortfolioModule } from './portfolio/portfolio.module';
import { ExploreFundsModule } from './explore-funds/explore-funds.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { TransactionSummaryModule } from './transaction-summary/transaction-summary.module';
import { HighchartsChartModule } from 'highcharts-angular';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { StyleService } from './style.service';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { AccountStatementComponent } from './account-statement/account-statement.component';
import { FolioLinkDelinkComponent } from './folio-link-delink/folio-link-delink.component';
import { SwitchComponent } from './switch/switch.component';
import { SwpComponent } from './swp/swp.component';
import { SmeModule } from './sme/sme.module';

// import { PortfolioComponent } from './portfolio/portfolio.component';
// import { MyholdingsComponent } from './portfolio/myholdings/myholdings.component';
// import { AssetallocationComponent } from './portfolio/assetallocation/assetallocation.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    ProductDetailsComponent,
    ProductListingComponent,
    AccountStatementComponent,
    FolioLinkDelinkComponent,
    SwitchComponent,
    SwpComponent,
  ],
  imports: [
    BrowserModule,   
    AppRoutingModule,
    NgxUsefulSwiperModule,
    PortfolioModule,
    ExploreFundsModule,
    DashboardModule,
    TransactionSummaryModule,
    HighchartsChartModule,
    NgbModule,
    SmeModule
  ],
  providers: [StyleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
