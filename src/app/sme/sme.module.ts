import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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


@NgModule({
  declarations: [PanFormComponent, KycFormComponent, SmeComponent, CityCountryComponent, AdditionalDetailsComponent, FactaCrsDetailsComponent, PartAComponent, PartBComponent, UltimateBeneficiaryOwnerComponent, BankDetailsComponent, UploadDocumentsComponent, SummaryComponent],
  imports: [
    CommonModule,
    SmeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SmeModule { }
