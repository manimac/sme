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
  @Input() KYCDataFromAdditional: any;
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
  showSelectCity: boolean = false;
  taxStatusData: any = [];
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
      taxStatus: new FormControl('', Validators.required)
    });
    this.kycForm3 = new FormGroup({
      taxStatus: new FormControl('', Validators.required),
      otp: new FormControl('', Validators.required)
    });
    this.kycForm4 = new FormGroup({
      city: new FormControl('', Validators.required),
      country: new FormControl('India', Validators.required)
    });
    this.currentPan = localStorage.getItem('pan') ? localStorage.getItem('pan') : this.currentPan;
    this.kycForm1.patchValue({pan: this.currentPan});
    if(this.KYCDataFromAdditional){
      this.showSubmitOTP = true;
      this.showSteps = false;
    }
    else{
      this.showSubmitOTP = false;
      this.showSteps = true;
    }
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

  get kycForm3Controls() {
    return this.kycForm3.controls;
  }

  get kycForm4Controls() {
    return this.kycForm4.controls;
  }

  //Show Current form and disable other forms
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
    this.kycForm3.patchValue({taxStatus: this.kycForm2.value.taxStatus});
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

  //City key press event for dropdown
  showCityData(){
    this.showSelectCity = true;
  }

  //Select city from dropdown
  selectCity(city){
    this.kycForm4.patchValue({city: city})
    this.showSelectCity = false;
  }

}
