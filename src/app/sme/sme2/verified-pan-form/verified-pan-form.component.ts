import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-verified-pan-form',
  templateUrl: './verified-pan-form.component.html',
  styleUrls: ['./verified-pan-form.component.css']
})
export class VerifiedPanFormComponent implements OnInit {

  @Output() showKYC = new EventEmitter<number>();
  @Output() showVerifiedKyc = new EventEmitter<number>();
  @Output() showFund = new EventEmitter<number>();
  panForm: FormGroup;
  submitted: boolean = false;
  showPanForm: boolean = true;
  showProceedKYC: boolean = false;
  constructor() { }

  ngOnInit(): void {
    this.panForm = new FormGroup({
      pan: new FormControl('', Validators.required)
    });
    let currentPan = localStorage.getItem('verifiedpan') ? localStorage.getItem('verifiedpan') :'';
    this.panForm.patchValue({pan: currentPan});
  }

  get panFormControl() {
    return this.panForm.controls;
  }

  verifyPan() {
    this.submitted = true;
    if (this.panForm.valid) {
      this.submitted = false;
      this.showPanForm = false;
      this.showProceedKYC = true;
    }
  }

  proceedKYC(){
    localStorage.setItem('verifiedpan', this.panForm.value.pan);
    this.showKYC.emit(this.panForm.value.pan);
    this.showVerifiedKyc.emit(this.panForm.value.pan);
  }

  showFundForm() {
    this.showFund.emit();
  }

}

