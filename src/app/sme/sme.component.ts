import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sme',
  templateUrl: './sme.component.html',
  styleUrls: ['./sme.component.css']
})
export class SmeComponent implements OnInit {

  showPanForm: boolean = true;
  showKYCForm: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  showPan(){
    this.showPanForm = true;
    this.showKYCForm = false;
  }

  showKYC(){
    this.showPanForm = false;
    this.showKYCForm = true;
  }

}
