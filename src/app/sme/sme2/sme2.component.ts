import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
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
