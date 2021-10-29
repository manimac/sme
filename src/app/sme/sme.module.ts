import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';

import { SmeRoutingModule } from './sme-routing.module';
import { PanFormComponent } from './pan-form/pan-form.component';
import { KycFormComponent } from './kyc-form/kyc-form.component';
import { SmeComponent } from './sme.component';
import { CityCountryComponent } from './city-country/city-country.component';
import { AdditionalDetailsComponent } from './additional-details/additional-details.component';
import { FactaCrsDetailsComponent } from './facta-crs-details/facta-crs-details.component';
import { PartAComponent } from './part-a/part-a.component';
import { PartBComponent } from './part-b/part-b.component';
import { UltimateBeneficiaryOwnerComponent } from './ultimate-beneficiary-owner/ultimate-beneficiary-owner.component';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { UploadDocumentsComponent } from './upload-documents/upload-documents.component';
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
registerLocaleData(localeDECH);
@NgModule({
  declarations: [PanFormComponent, KycFormComponent, SmeComponent, CityCountryComponent, AdditionalDetailsComponent, FactaCrsDetailsComponent, PartAComponent, PartBComponent, UltimateBeneficiaryOwnerComponent, BankDetailsComponent, UploadDocumentsComponent, SummaryComponent, AcceptOnlyNumberDirective, FilterArrayPipe, Sme2Component, VerifiedKycComponent],
  imports: [
    CommonModule,
    SmeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    BrowserAnimationsModule,
    NgbModule 
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'de-ch'
    }
  ]
})
export class SmeModule { }
