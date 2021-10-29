import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sme2',
  templateUrl: './sme2.component.html',
  styleUrls: ['./sme2.component.css']
})
export class Sme2Component implements OnInit {

  showPanForm: boolean = true;
  showKYCForm: boolean = false;
  showAdditionalForm: boolean = false;
  showSummaryForm: boolean = false;
  currentPan: any = '';
  currentForm: any = '';
  constructor() { }

  ngOnInit(): void {
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
