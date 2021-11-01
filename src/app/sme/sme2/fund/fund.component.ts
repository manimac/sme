import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

declare var $: any;
@Component({
  selector: 'app-fund',
  templateUrl: './fund.component.html',
  styleUrls: ['./fund.component.css']
})
export class FundComponent implements OnInit {
  @Output() showPan = new EventEmitter<number>();
  kycForm1: FormGroup;
  kycForm2: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.kycForm2 = new FormGroup({
      taxstatus: new FormControl('', Validators.required),
      investmenttype: new FormControl('Yes', Validators.required)
    });
  }
  get kycForm1Controls() {
    return this.kycForm1.controls;
  } 
  get kycForm2Controls() {
    return this.kycForm2.controls;
  } 

  showPanForm() {
    this.showPan.emit();
  }

}
