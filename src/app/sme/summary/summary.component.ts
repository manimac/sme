import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  @Output() showAdditional = new EventEmitter<number>();
  summary: boolean = true;
  successMessage: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  showSuccessMessage(){
    this.summary = false;
    this.successMessage = true;
  }

  navigateSummary(form){
    this.showAdditional.emit(form)
  }

}
