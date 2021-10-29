import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sme',
  templateUrl: './sme.component.html',
  styleUrls: ['./sme.component.css']
})
export class SmeComponent implements OnInit {

  showPanForm: boolean = true;
  showKYCForm: boolean = false;
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
  }

  showKYC(ev: any = ''){
    this.showPanForm = false;
    this.showKYCForm = true;
    this.showAdditionalForm = false;
    this.currentPan = ev;
  }

  showAdditional(){
    this.showKYCForm = false;
    this.showAdditionalForm = true;
    this.showSummaryForm = false;
  }
  
  showSummary(){
    this.showAdditionalForm = false;
    this.showSummaryForm = true;
  }

  showAdditionalNavigation(ev){
    this.showAdditional();
    this.currentForm = ev;
  }

}
