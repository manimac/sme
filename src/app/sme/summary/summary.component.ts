import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  summary: boolean = true;
  successMessage: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  showSuccessMessage(){
    this.summary = false;
    this.successMessage = true;
  }

}
