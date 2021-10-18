import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-kyc-form',
  templateUrl: './kyc-form.component.html',
  styleUrls: ['./kyc-form.component.css']
})
export class KycFormComponent implements OnInit {

  @Output() showPan = new EventEmitter<number>();
  showSteps: boolean = true;
  showDateOfIncorporation: boolean = false;
  showTaxStatus: boolean = false;
  showVerifyOTP: boolean = false;
  showSubmitOTP: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  showPanForm(){
    this.showPan.emit();
  }

  showStepsForm(){
    this.showSteps = true;
    this.showDateOfIncorporation = false;
  }

  showDateOfIncorporationForm(){
    this.showSteps = false;
    this.showDateOfIncorporation = true;
    this.showTaxStatus = false;
  }

  showTaxStatusForm(){
    this.showDateOfIncorporation = false;
    this.showTaxStatus = true;
    this.showVerifyOTP = false;
  }

  showVerifyOTPForm(){
    this.showTaxStatus = false;
    this.showVerifyOTP = true;
    this.showSubmitOTP = false;
  }

  showSubmitOTPForm(){
    this.showVerifyOTP = false;
    this.showSubmitOTP = true;
  }

}
