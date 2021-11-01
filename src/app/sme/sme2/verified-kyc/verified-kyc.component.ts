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
  showSteps: boolean = true;
  showDateOfIncorporation: boolean = false;
  showKRARecords: boolean = true;
  showVerifyOTP: boolean = false;
  showSubmitOTP: boolean = false;
  kycForm1: FormGroup;
  kycForm2: FormGroup;
  kycForm3: FormGroup;
  kycForm4: FormGroup;
  showSelectCity: boolean = false;
  citites: any = ['Ahmadnagar', 'Amravati', 'Aurangabad', 'Bhandara', 'Buldana', 'Delhi', 'Karnataka', 'Tamilnadu', 'Kerala'];
  constructor() { }

  ngOnInit(): void {
    this.kycForm2 = new FormGroup({
      otp: new FormControl('', Validators.required)
    });
    this.kycForm4 = new FormGroup({
      city: new FormControl('', Validators.required),
      country: new FormControl('India', Validators.required)
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

  get kycForm4Controls() {
    return this.kycForm4.controls;
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

  showCityData(){
    this.showSelectCity = true;
  }

  selectCity(city){
    this.kycForm4.patchValue({city: city})
    this.showSelectCity = false;
  }

}
