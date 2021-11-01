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
  fundForm1: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.fundForm1 = new FormGroup({
      investmentSolution: new FormControl(''),
      category: new FormControl(''),
      subCategory: new FormControl(''),
      type: new FormControl(''),
      schemeOption: new FormControl('', Validators.required),
      investmenttype: new FormControl('SIP', Validators.required)
    });
  }
  get fundForm1Controls() {
    return this.fundForm1.controls;
  } 

  showPanForm() {
    localStorage.setItem('verifiedpan', '');
    this.showPan.emit();
  }

}
