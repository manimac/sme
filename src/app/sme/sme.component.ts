import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }

  showPan(){
    this.showPanForm = true;
    this.showKYCForm = false;
  }

  showKYC(){
    this.showPanForm = false;
    this.showKYCForm = true;
  }

  showAdditional(){
    this.showKYCForm = false;
    this.showAdditionalForm = true;
  }
  
  showSummary(){
    this.showAdditionalForm = false;
    this.showSummaryForm = true;
  }

}
