import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-kyc-form',
  templateUrl: './kyc-form.component.html',
  styleUrls: ['./kyc-form.component.css']
})
export class KycFormComponent implements OnInit {

  @Output() showPan = new EventEmitter<number>();
  @Output() showAdditional = new EventEmitter<number>();
  showSteps: boolean = true;
  showDateOfIncorporation: boolean = false;
  showTaxStatus: boolean = false;
  showVerifyOTP: boolean = false;
  showSubmitOTP: boolean = false;
  kycForm1: FormGroup;
  kycForm2: FormGroup;
  kycForm3: FormGroup;
  submitted: boolean = false;
  constructor() { }

  ngOnInit(): void {
    this.kycForm1 = new FormGroup({
      pan: new FormControl('', Validators.required),
      dateOfIncorporation: new FormControl('', Validators.required),
    });
    this.kycForm2 = new FormGroup({
      mobile: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      taxStatus: new FormControl('Partnership', Validators.required)
    });
    this.kycForm3 = new FormGroup({
      otp: new FormControl('', Validators.required)
    });
  }

  get kycForm1Controls() {
    return this.kycForm1.controls;
  }

  get kycForm2Controls() {
    return this.kycForm2.controls;
  }

  get kycForm3Controls() {
    return this.kycForm3.controls;
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

  showAdditionalForm(){
    this.showSubmitOTP = false;
    this.showAdditional.emit();
  }

}
