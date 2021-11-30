import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.css']
})
export class LayoutsComponent implements OnInit {

  @ViewChild('pathFundDetails', { static: false }) pathFundDetails:any;
  @ViewChild('pathIdentifyYourself', { static: false }) pathIdentifyYourself:any;
  @ViewChild('pathInvestorDetails', { static: false }) pathInvestorDetails:any;
  @ViewChild('pathInvestmentDetails', { static: false }) pathInvestmentDetails:any;
  @ViewChild('pathPayment', { static: false }) pathPayment:any;
  constructor() { }
  

  ngOnInit(): void {
  }
  
  ngAfterViewInit(): void {
    this.setProgressBar(this.pathFundDetails.nativeElement, 100);
    this.setProgressBar(this.pathIdentifyYourself.nativeElement, 75);
    this.setProgressBar(this.pathInvestorDetails.nativeElement, 50);
    this.setProgressBar(this.pathInvestmentDetails.nativeElement, 25);
    this.setProgressBar(this.pathPayment.nativeElement, 0);
  }

  setProgressBar(elem:any, percent:any) {
    elem.style.strokeDashoffset =  elem.getTotalLength() * ((100 - percent) /100);
  }

}
