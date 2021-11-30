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
  currentPan: any = '';
  taxStatusData: any= [];
  today: any = new Date();
  constructor() { }

  ngOnInit(): void {
    this.kycForm1 = new FormGroup({
      taxStatus: new FormControl('', Validators.required),
      dateOfIncorporation: new FormControl(this.today, Validators.required),
    });
    this.kycForm2 = new FormGroup({
      taxStatus: new FormControl(''),
      otp: new FormControl('', Validators.required)
    });
    this.currentPan = localStorage.getItem('verifiedpan') ? localStorage.getItem('verifiedpan') : this.currentPan;
    if(this.currentPan.charAt(3)){
      if(this.currentPan.charAt(3).toLowerCase() == 'c'){
        this.taxStatusData = ['Company', 'Private limited company', 'Public limited company', 'Financial institution', 'Bank/Financial institution', 'Government body', 'Unlisted company', 'Insurance company'];
        this.kycForm2.patchValue({taxStatus: 'Company'});
      }
      else if(this.currentPan.charAt(3).toLowerCase() == 'h'){
        this.taxStatusData = ['HUF'];
        this.kycForm2.patchValue({taxStatus: 'HUF'});
      }
      else if(this.currentPan.charAt(3).toLowerCase() == 'a'){
        this.taxStatusData = ['Association of Person'];
      }
      else if(this.currentPan.charAt(3).toLowerCase() == 'b'){
        this.taxStatusData = ['Body of Individuals'];
      }
      else if(this.currentPan.charAt(3).toLowerCase() == 'g'){
        this.taxStatusData = ['Defence Establishment', 'Government Body'];
        this.kycForm2.patchValue({taxStatus: 'Government Body'});
      }
      else if(this.currentPan.charAt(3).toLowerCase() == 'j'){
        this.taxStatusData = ['Artificial Juridical Person'];
      }
      else if(this.currentPan.charAt(3).toLowerCase() == 'l'){
        this.taxStatusData = ['Local Authority'];
      }
      else if(this.currentPan.charAt(3).toLowerCase() == 'f'){
        this.taxStatusData = ['Partnership Firm', 'Limited Liability Partnership'];
        this.kycForm2.patchValue({taxStatus: 'Partnership Firm'});
      }
      else if(this.currentPan.charAt(3).toLowerCase() == 't'){
        this.taxStatusData = ['Trust', 'Mutual Fund', 'NPS Trust', 'FCRA', 'Non-Profit Organization', 'Global Development Network' , 'Society', 'Mutual Funds FOF Schemes'];
        this.kycForm2.patchValue({taxStatus: 'Trust'});
      }
    }
  }

  //Get form controls value
  get kycForm1Controls() {
    return this.kycForm1.controls;
  }

  get kycForm2Controls() {
    return this.kycForm2.controls;
  }

  //Show Current form and disable other forms
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

  //Edit Mobile
  toggleMobile(){
    this.showMobile = !this.showMobile;
  }

  //Edit Email
  toggleEmail(){
    this.showEmail = !this.showEmail;
  }

  //Set tax status value for form 2
  setTaxstatus(value){
    this.kycForm2.patchValue({taxStatus: value})
  }

}
