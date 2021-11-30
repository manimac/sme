import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  @Output() showAdditional = new EventEmitter<number>();
  summary: boolean = true;
  successMessage: boolean = false;
  summaryForm: FormGroup
  constructor() { }

  ngOnInit(): void {
    this.summaryForm = new FormGroup({
      factaAndCrsDeclaration: new FormControl('', Validators.required),
      termsAndConditions: new FormControl('', Validators.required)
    });
  }

  //Show Current form and disable other forms
  showSuccessMessage(){
    this.summary = false;
    this.successMessage = true;
  }

  navigateSummary(form){
    this.showAdditional.emit(form)
  }

}
