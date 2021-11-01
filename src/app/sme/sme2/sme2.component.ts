import { Component, OnInit, ViewChild } from '@angular/core';
import { SignaturePad } from 'angular2-signaturepad';

@Component({
  selector: 'app-sme2',
  templateUrl: './sme2.component.html',
  styleUrls: ['./sme2.component.css']
})
export class Sme2Component implements OnInit {

  showFundForm: boolean = true;
  showPanForm: boolean = false;
  showVerifiedKycForm: boolean = false;
  showKYCForm: boolean = false;
  showIncorporationForm: boolean = false;
  showAdditionalForm: boolean = false;
  showSummaryForm: boolean = false;
  currentPan: any = '';
  currentForm: any = '';
  @ViewChild('pathFundDetails', { static: false }) pathFundDetails:any;
  @ViewChild('pathIdentifyYourself', { static: false }) pathIdentifyYourself:any;
  @ViewChild('pathInvestorDetails', { static: false }) pathInvestorDetails:any;
  @ViewChild('pathInvestmentDetails', { static: false }) pathInvestmentDetails:any;
  @ViewChild('pathPayment', { static: false }) pathPayment:any;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.setProgressBar(this.pathFundDetails.nativeElement, 100);
    this.setProgressBar(this.pathIdentifyYourself.nativeElement, 75);
    this.setProgressBar(this.pathInvestorDetails.nativeElement, 50);
    this.setProgressBar(this.pathInvestmentDetails.nativeElement, 25);
    this.setProgressBar(this.pathPayment.nativeElement, 0);
  }

  setProgressBar(elem:any, percent:any) {
    elem.style.strokeDashoffset =  elem.getTotalLength() * ((100 - percent) /100);
  }
  
  showFund() {
    this.showFundForm = true;
    this.showPanForm = false;
    this.showKYCForm = false;
    this.showVerifiedKycForm = false;
    this.showIncorporationForm = false;
  }

  showPan(){
    this.showPanForm = true;
    this.showKYCForm = false;
    this.showVerifiedKycForm = false;
    this.showIncorporationForm = false;
    this.showFundForm = false;
  }

  showIncorporation(){
    this.showPanForm = false;
    this.showKYCForm = false;
    this.showVerifiedKycForm = false;
    this.showIncorporationForm = true;
    this.showAdditionalForm = false;
  }

  showVerifiedKyc(ev: any = '') {
    this.showPanForm = false;
    this.showVerifiedKycForm = true;
    this.showAdditionalForm = false;
    this.currentPan = ev;
    this.showIncorporationForm = false;
  }

  showKYC(ev: any = ''){
    this.showPanForm = false;
    this.showKYCForm = true;
    this.showAdditionalForm = false;
    this.currentPan = ev;
    this.showIncorporationForm = false;
  }

  showAdditional(){
    this.showVerifiedKycForm = false;
    this.showAdditionalForm = true;
    this.showSummaryForm = false;
    this.showIncorporationForm = false;
  }
  
  showSummary(){
    this.showAdditionalForm = false;
    this.showSummaryForm = true;
    this.showIncorporationForm = false;
  }

  showAdditionalNavigation(ev){
    this.showAdditional();
    this.currentForm = ev;
  }
}
