import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sme-new',
  templateUrl: './sme-new.component.html',
  styleUrls: ['./sme-new.component.css']
})
export class SmeNewComponent implements OnInit {

  showPanForm: boolean = true;
  showKYCForm: boolean = false;
  KYCDataFromAdditional: boolean = false;
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

  showPan(){
    this.showPanForm = true;
    this.showKYCForm = false;
    this.KYCDataFromAdditional = false;
  }

  showKYC(ev: any = ''){
    this.showPanForm = false;
    this.showKYCForm = true;
    this.showAdditionalForm = false;
    this.KYCDataFromAdditional = false;
    this.currentPan = ev;
  }

  KYCFromAdditional(ev: any = ''){
    this.showPanForm = false;
    this.showKYCForm = true;
    this.showAdditionalForm = false;
    this.KYCDataFromAdditional = true;
    this.currentPan = ev;
  }

  showAdditional(){
    this.showKYCForm = false;
    this.showAdditionalForm = true;
    this.showSummaryForm = false;
    this.KYCDataFromAdditional = false;
  }
  
  showSummary(){
    this.showAdditionalForm = false;
    this.showSummaryForm = true;
    this.KYCDataFromAdditional = false;
  }

  showAdditionalNavigation(ev){
    this.showAdditional();
    this.currentForm = ev;
  }

}
