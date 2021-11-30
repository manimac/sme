import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

declare var $: any;
@Component({
  selector: 'app-incorporation',
  templateUrl: './incorporation.component.html',
  styleUrls: ['./incorporation.component.css']
})
export class IncorporationComponent implements OnInit {

 
  @Output() showAdditional = new EventEmitter<number>();
  @Output() showVerifiedKyc = new EventEmitter<number>();
  showSteps: boolean = true;
  showDateOfIncorporation: boolean = false;
  showKRARecords: boolean = true;
  showVerifyOTP: boolean = false;
  showSubmitOTP: boolean = false;

  kycForm4: FormGroup;
  showSelectCity: boolean = false;
  citites: any = ['Ahmadnagar', 'Amravati', 'Aurangabad', 'Bhandara', 'Buldana', 'Delhi', 'Karnataka', 'Tamilnadu', 'Kerala'];
  constructor() { }

  ngOnInit(): void { 
    this.kycForm4 = new FormGroup({
      city: new FormControl('', Validators.required),
      country: new FormControl('India', Validators.required)
    });
  }

  //Get form controls value
  get kycForm4Controls() {
    return this.kycForm4.controls;
  }

  //Show Current form and disable other forms
  showAdditionalForm() {
    this.showAdditional.emit();
  }

  showVerifiedKycForm() {
    this.showVerifiedKyc.emit();
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
