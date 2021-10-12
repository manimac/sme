import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { PortfolioSummaryComponent } from './portfolio-summary/portfolio-summary.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { ChartModule } from 'angular-highcharts';
import { PortfolioPerformanceComponent } from './portfolio-performance/portfolio-performance.component';
import { FormsModule } from '@angular/forms';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { NBOSchemesComponent } from './nbo-schemes/nbo-schemes.component';
import { PlaceholderTextComponent } from './placeholder-text/placeholder-text.component';
import { TopTrendingComponent } from './top-trending/top-trending.component';
import { StyleService } from '../style.service';


@NgModule({
  declarations: [DashboardComponent, PortfolioSummaryComponent,PortfolioPerformanceComponent,
    NBOSchemesComponent,
    PlaceholderTextComponent,
    TopTrendingComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HighchartsChartModule,
    NgxUsefulSwiperModule,
    ChartModule,
    FormsModule
    
  ],
  providers:[StyleService]
})
export class DashboardModule { }
