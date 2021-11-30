import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-pan-form',
  templateUrl: './pan-form.component.html',
  styleUrls: ['./pan-form.component.css']
})
export class PanFormComponent implements OnInit {

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
  }

  //Get form controls value
  get panFormControl() {
    return this.panForm.controls;
  }

  //Show Current form and disable other forms
  verifyPan() {
    this.submitted = true;
    if (this.panForm.valid) {
      this.submitted = false;
      this.showPanForm = false;
      this.showProceedKYC = true;
    }
  }

  proceedKYC(){
    localStorage.setItem('pan', this.panForm.value.pan);
    this.showKYC.emit(this.panForm.value.pan);
    this.showVerifiedKyc.emit(this.panForm.value.pan);
  }

  showFundForm() {
    this.showFund.emit();
  }

  keyPressAlphanumeric(event) {
    var inp = String.fromCharCode(event.keyCode);
    if (/[a-zA-Z0-9]/.test(inp)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }

}
