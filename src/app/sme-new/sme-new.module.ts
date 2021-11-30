import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';

import { SmeNewRoutingModule } from './sme-new-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import localeDECH from '@angular/common/locales/de-CH';
import { AcceptOnlyNumberDirective } from './directives/accept-only-number.directive';
import { FilterArrayPipe } from './pipes/filter-array.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SignaturePadModule } from 'angular2-signaturepad';
import { AcceptAlphaNumericDirective } from './directives/accept-alpha-numeric.directive';
import { PanComponent } from './forms/pan/pan.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { PanVerifyComponent } from './forms/pan-verify/pan-verify.component';
registerLocaleData(localeDECH);
@NgModule({
  declarations: [AcceptOnlyNumberDirective, FilterArrayPipe, AcceptAlphaNumericDirective, PanComponent, LayoutsComponent, PanVerifyComponent],
  imports: [
    CommonModule,
    SmeNewRoutingModule,
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
export class SmeNewModule { }
