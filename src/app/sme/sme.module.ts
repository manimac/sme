import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';

import { SmeRoutingModule } from './sme-routing.module';
import { PanFormComponent } from './pan-form/pan-form.component';
import { KycFormComponent } from './kyc-form/kyc-form.component';
import { SmeComponent } from './sme.component';
import { AdditionalDetailsComponent } from './additional-details/additional-details.component';
import { SummaryComponent } from './summary/summary.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import localeDECH from '@angular/common/locales/de-CH';
import { AcceptOnlyNumberDirective } from './directives/accept-only-number.directive';
import { FilterArrayPipe } from './pipes/filter-array.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Sme2Component } from './sme2/sme2.component';
import { VerifiedKycComponent } from './sme2/verified-kyc/verified-kyc.component';
import { SignaturePadModule } from 'angular2-signaturepad';
import { IncorporationComponent } from './sme2/incorporation/incorporation.component';
import { FundComponent } from './sme2/fund/fund.component';
import { VerifiedPanFormComponent } from './sme2/verified-pan-form/verified-pan-form.component';
import { AcceptAlphaNumericDirective } from './directives/accept-alpha-numeric.directive';
registerLocaleData(localeDECH);
@NgModule({
  declarations: [PanFormComponent, KycFormComponent, SmeComponent, AdditionalDetailsComponent, SummaryComponent, AcceptOnlyNumberDirective, FilterArrayPipe, Sme2Component, VerifiedKycComponent, IncorporationComponent, FundComponent, VerifiedPanFormComponent, AcceptAlphaNumericDirective],
  imports: [
    CommonModule,
    SmeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    BrowserAnimationsModule,
    NgbModule,
    SignaturePadModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'de-ch'
    }
  ]
})
export class SmeModule { }
