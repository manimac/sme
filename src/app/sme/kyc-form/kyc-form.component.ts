import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
declare var $: any;
@Component({
  selector: 'app-kyc-form',
  templateUrl: './kyc-form.component.html',
  styleUrls: ['./kyc-form.component.css']
})
export class KycFormComponent implements OnInit {

  @Output() showPan = new EventEmitter<number>();
  @Output() showAdditional = new EventEmitter<number>();
  @Input() currentPan: any;
  showSteps: boolean = true;
  showDateOfIncorporation: boolean = false;
  showTaxStatus: boolean = false;
  showVerifyOTP: boolean = false;
  showSubmitOTP: boolean = false;
  kycForm1: FormGroup;
  kycForm2: FormGroup;
  kycForm3: FormGroup;
  kycForm4: FormGroup;
  submitted: boolean = false;
  today: any = new Date();
  citites: any = ['Ahmadnagar', 'Amravati', 'Aurangabad', 'Bhandara', 'Buldana', 'Delhi', 'Karnataka', 'Tamilnadu', 'Kerala'];
  constructor(private bsLocaleService: BsLocaleService) {
   }

  ngOnInit(): void {
    this.kycForm1 = new FormGroup({
      pan: new FormControl('', Validators.required),
      dateOfIncorporation: new FormControl(this.today, Validators.required),
    });
    this.kycForm2 = new FormGroup({
      mobile: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      taxStatus: new FormControl('Partnership', Validators.required)
    });
    this.kycForm3 = new FormGroup({
      otp: new FormControl('', Validators.required)
    });
    this.kycForm4 = new FormGroup({
      city: new FormControl('', Validators.required),
      country: new FormControl('India', Validators.required)
    });
    this.currentPan = localStorage.getItem('pan') ? localStorage.getItem('pan') : this.currentPan;
    this.kycForm1.patchValue({pan: this.currentPan});
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
