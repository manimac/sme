import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

declare var $: any;
@Component({
  selector: 'app-verified-kyc',
  templateUrl: './verified-kyc.component.html',
  styleUrls: ['./verified-kyc.component.css']
})
export class VerifiedKycComponent implements OnInit {
  @Output() showPan = new EventEmitter<number>();
  @Output() showIncorporation = new EventEmitter<number>();
  @Output() showAdditional = new EventEmitter<number>();
  showKRARecords: boolean = true;
  showVerifyOTP: boolean = false;
  showSubmitOTP: boolean = false;
  kycForm1: FormGroup;
  kycForm2: FormGroup;
  showMobile: boolean = false;
  showEmail: boolean = false;
  constructor() { }

  ngOnInit(): void {
    this.kycForm1 = new FormGroup({
      taxStatus: new FormControl('', Validators.required)
    });
    this.kycForm2 = new FormGroup({
      otp: new FormControl('', Validators.required)
    });
  }

  get kycForm1Controls() {
    return this.kycForm1.controls;
  }

  get kycForm2Controls() {
    return this.kycForm2.controls;
  }

  showPanForm(){
    this.showPan.emit();
  }
  showIncorporationForm() {
    this.showIncorporation.emit();
  }
  showAdditionalForm() {
    this.showAdditional.emit();
  }

  showSubmitOTPForm(){
    this.showVerifyOTP = false;
    this.showKRARecords = false;
    this.showSubmitOTP = true;
  }


  showVerifyOTPForm(){
    this.showVerifyOTP = true;
    this.showKRARecords = false;
    this.showSubmitOTP = false;
  }

  toggleMobile(){
    this.showMobile = !this.showMobile;
  }

  toggleEmail(){
    this.showEmail = !this.showEmail;
  }

}
