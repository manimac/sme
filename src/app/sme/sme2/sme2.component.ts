import { Component, OnInit, ViewChild } from '@angular/core';
import { SignaturePad } from 'angular2-signaturepad';

@Component({
  selector: 'app-sme2',
  templateUrl: './sme2.component.html',
  styleUrls: ['./sme2.component.css']
})
export class Sme2Component implements OnInit {

  showPanForm: boolean = true;
  showKYCForm: boolean = false;
  showAdditionalForm: boolean = false;
  showSummaryForm: boolean = false;
  currentPan: any = '';
  currentForm: any = '';
  constructor() { }

  ngOnInit(): void {
  }

  showPan(){
    this.showPanForm = true;
    this.showKYCForm = false;
  }

  showKYC(ev: any = ''){
    this.showPanForm = false;
    this.showKYCForm = true;
    this.showAdditionalForm = false;
    this.currentPan = ev;
  }

  showAdditional(){
    this.showKYCForm = false;
    this.showAdditionalForm = true;
    this.showSummaryForm = false;
  }
  
  showSummary(){
    this.showAdditionalForm = false;
    this.showSummaryForm = true;
  }

  showAdditionalNavigation(ev){
    this.showAdditional();
    this.currentForm = ev;
  }

  @ViewChild(SignaturePad) signaturePad: SignaturePad;
  signatureImg: string;
  signaturePadOptions: Object = { 
    'minWidth': 2,
    'canvasWidth': 700,
    'canvasHeight': 300
  };

  drawComplete() {
    console.log(this.signaturePad.toDataURL());
  }

  drawStart() {
    console.log('begin drawing');
  }

  clearSignature() {
    this.signaturePad.clear();
  }

  savePad() {
    const base64Data = this.signaturePad.toDataURL();
    this.signatureImg = base64Data;
  }

  ngAfterViewInit() {
    // this.signaturePad is now available
    this.signaturePad.set('minWidth', 2); 
    this.signaturePad.clear(); 
  }

}
