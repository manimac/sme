import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignaturePad } from 'angular2-signaturepad';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
@Component({
  selector: 'app-additional-details',
  templateUrl: './additional-details.component.html',
  styleUrls: ['./additional-details.component.css']
})
export class AdditionalDetailsComponent implements OnInit {

  @Output() KYCFromAdditional = new EventEmitter<number>();
  @Output() showIncorporation = new EventEmitter<number>();
  @Output() showSummary = new EventEmitter<number>();
  @Input() currentForm: any;
  @ViewChild(SignaturePad) signaturePad: SignaturePad;
  signatureImg: string;
  signaturePadOptions: Object = {
    'minWidth': 2,
    'canvasWidth': 700,
    'canvasHeight': 300
  };
  today: any = new Date();
  showStep1: boolean = true;
  showStep2: boolean = false;
  showStep3: boolean = false;
  showStep4: boolean = false;
  showStep4extra: boolean = false;
  showStep5: boolean = false;
  showStep6: boolean = false;
  showStep7: boolean = false;
  showSelectCountry: boolean = false;
  showSelectCountryStep6: boolean = false;
  showSelectCountryOfBirth: boolean = false;
  step1Form: FormGroup;
  step2Form: FormGroup;
  step2FormData: any = [
    {
      country: "",
      taxIdentificationNUmber: "",
      identificationType: ""
    }
  ];
  step3Form: FormGroup;
  step4Form: FormGroup;
  step4FormExtra: FormGroup;
  showSignature: boolean = false;
  step5FormData: any = [
    {
      nameOfUBO: '',
      taxId: '',
      taxIdType: '',
      typeCode: '',
      addressType: '',
      pinCode: '',
      country: '',
      state: '',
      address: '',
      pan: '',
      countryOfBirth: '',
      cityOfBirth: '',
      occupationType: 'Business',
      nationality: '',
      dob: this.today,
      gender: '',
      holding: '30%'
    }
  ];
  step5Form: FormGroup;
  step6Form: FormGroup;
  step7Form: FormGroup;
  services: any = [
    {
      name: 'Foreign Exchange / Money Changer Services / Money Lending',
      isChecked: false
    },
    {
      name: 'Gaming / Gambling / Lottery Services / Casino Service',
      isChecked: false
    },
    {
      name: 'Money Laundering / Pawning',
      isChecked: false
    },
    {
      name: 'None of these',
      isChecked: true
    }
  ]
  countries: any = ['India', 'Australia', 'United States', 'China'];
  categories: any = [
    {
      name: 'Unlisted Company'
    },
    {
      name: 'Partnership Firm'
    },
    {
      name: 'LLP'
    },
    {
      name: 'Unincorporated association'
    },
    {
      name: 'body of individuals'
    },
    {
      name: 'Public Charitable Trust'
    },
    {
      name: 'Religious Trust'
    },
    {
      name: 'Private Trust'
    },
    {
      name: 'Others'
    }
  ]
  validate: boolean = false;
  uploadedFileName: any = 'Browse files here';
  uploadDocuments: any = [
    {
      name: 'Board Resolution',
      fileName: ''
    },
    {
      name: 'Memorandum & Article of Association',
      fileName: ''
    },
    {
      name: 'List of Authorised Signatories',
      fileName: ''
    }
  ];
  currentPan: any = '';
  constructor(private bsLocaleService: BsLocaleService) { }

  ngOnInit(): void {
    this.step1Form = new FormGroup({
      isListedCompany: new FormControl('No'),
      networth: new FormControl('', Validators.required),
      networthDate: new FormControl(this.today, Validators.required),
      pep: new FormControl('Not Applicable', Validators.required)
    });
    this.step2Form = new FormGroup({
      taxResidant: new FormControl('No', Validators.required)
    });
    this.step3Form = new FormGroup({
      entityType: new FormControl('Not Applicable', Validators.required),
      gin: new FormControl(''),
      sponserName: new FormControl(''),
      sponserGin: new FormControl(''),
      ginNotApplicable: new FormControl(''),
      twoDigits1: new FormControl(''),
      twoDigits2: new FormControl('')
    });
    this.step4Form = new FormGroup({
      entityType: new FormControl('Entity is a Public Traded Company', Validators.required),
      stockExchange: new FormControl('Bombay Stock Exchange (BSE)'),
      nameOfListedCompany: new FormControl(''),
      natureOfRelation: new FormControl('Bombay Stock Exchange (BSE)'),
      stockExchange2: new FormControl('Subsidiary of listed Company')
    });
    this.step4FormExtra = new FormGroup({
      entityTypeExtra: new FormControl('Active NFE', Validators.required),
      twoDigits1: new FormControl(''),
      twoDigits2: new FormControl('')
    });
    this.step5Form = new FormGroup({
      category: new FormControl('Unlisted Company', Validators.required),
      // factaAndCrsDeclaration: new FormControl('', Validators.required),
      // termsAndConditions: new FormControl('', Validators.required)
    });
    this.step6Form = new FormGroup({
      ifsc: new FormControl('UTBI0000207', Validators.required),
      nameOfBank: new FormControl('Azis Bank', Validators.required),
      branchName: new FormControl('Jankpuri(Delhi)', Validators.required),
      branchAddress: new FormControl('C-31, Jankpuri', Validators.required),
      city: new FormControl('Delhi', Validators.required),
      accountNumber: new FormControl('', Validators.required),
      confirmAccountNumber: new FormControl('', Validators.required),
      accountType: new FormControl('', Validators.required),
      validate: new FormControl('', Validators.required),
      uploadedFile: new FormControl(''),
    });
    this.step7Form = new FormGroup({
      // boardResolution: new FormControl('', Validators.required),
      // memorandum: new FormControl('', Validators.required),
      // authorisedSignatories: new FormControl('', Validators.required)
    });
    if (this.currentForm) {
      this[this.currentForm]();
      this.currentForm = '';
    }
    this.currentPan = localStorage.getItem('pan') ? localStorage.getItem('pan') : this.currentPan;
  }

  enableBasedOn(char){
    let result = false;
    if(this.currentPan.charAt(3)){
      if(this.currentPan.charAt(3).toLowerCase() == char){
        result = true;
      }
    }
    return result;
  }


  ngAfterViewInit() {
    this.loadSignature();
  }

  loadSignature() {
    if (this.signaturePad) {
      this.signaturePad.set('minWidth', 2);
      this.signaturePad.clear();
    }
  }

  get step1FormControls() {
    return this.step1Form.controls;
  }

  get step2FormControls() {
    return this.step2Form.controls;
  }

  get step3FormControls() {
    return this.step3Form.controls;
  }

  get step4FormControls() {
    return this.step4Form.controls;
  }

  get step4FormExtraControls() {
    return this.step4FormExtra.controls;
  }

  get step5FormControls() {
    return this.step5Form.controls;
  }

  get step6FormControls() {
    return this.step6Form.controls;
  }

  get step7FormControls() {
    return this.step7Form.controls;
  }

  showKycForm() {
    this.KYCFromAdditional.emit();
    this.showIncorporation.emit();
  }

  showStep1Form() {
    this.showStep1 = true;
    this.showStep2 = false;
    this.showStep3 = false;
    this.showStep4 = false;
    this.showStep4extra = false;
    this.showStep5 = false;
    this.showStep6 = false;
    this.showStep7 = false;
  }

  showStep2Form() {
    this.showStep1 = false;
    this.showStep2 = true;
    this.showStep3 = false;
    this.showStep4 = false;
    this.showStep4extra = false;
    this.showStep5 = false;
    this.showStep6 = false;
    this.showStep7 = false;
  }

  showStep3Form() {
    this.showStep1 = false;
    this.showStep2 = false;
    this.showStep3 = true;
    this.showStep4 = false;
    this.showStep4extra = false;
    this.showStep5 = false;
    this.showStep6 = false;
    this.showStep7 = false;
  }

  showStep4Form() {
    this.showStep1 = false;
    this.showStep2 = false;
    this.showStep3 = false;
    this.showStep4 = true;
    this.showStep4extra = false;
    this.showStep5 = false;
    this.showStep6 = false;
    this.showStep7 = false;
  }

  showStep4ExtraForm() {
    this.showStep1 = false;
    this.showStep2 = false;
    this.showStep3 = false;
    this.showStep4 = false;
    this.showStep4extra = true;
    this.showStep5 = false;
    this.showStep6 = false;
    this.showStep7 = false;
  }

  showStep5Form() {
    this.showStep1 = false;
    this.showStep2 = false;
    this.showStep3 = false;
    this.showStep4 = false;
    this.showStep4extra = false;
    this.showStep5 = true;
    this.showStep6 = false;
    this.showStep7 = false;
  }

  showStep6Form() {
    this.showStep1 = false;
    this.showStep2 = false;
    this.showStep3 = false;
    this.showStep4 = false;
    this.showStep4extra = false;
    this.showStep5 = false;
    this.showStep6 = true;
    this.showStep7 = false;
  }

  showStep7Form() {
    this.showStep1 = false;
    this.showStep2 = false;
    this.showStep3 = false;
    this.showStep4 = false;
    this.showStep4extra = false;
    this.showStep5 = false;
    this.showStep6 = false;
    this.showStep7 = true;
    this.loadSignature();
  }

  showSummaryForm() {
    this.showStep1 = false;
    this.showStep2 = false;
    this.showStep3 = false;
    this.showStep4 = false;
    this.showStep4extra = false;
    this.showStep5 = false;
    this.showStep6 = false;
    this.showStep7 = false;
    this.showSummary.emit();
  }

  isServiceNotSelected() {
    let selectedService = this.services.find(element => (element.isChecked));
    return (selectedService) ? false : true;
  }

  isCountryNotAdded() {
    let isNotValid: boolean = this.step2FormData.find(element => (!element.country || !element.taxIdentificationNUmber || !element.identificationType));
    return (!isNotValid) ? false : true;
  }

  addCountry() {
    let isNotValid: boolean = this.step2FormData.find(element => (!element.country || !element.taxIdentificationNUmber || !element.identificationType));
    if (!isNotValid) {
      let obj = {
        country: '',
        taxIdentificationNUmber: '',
        identificationType: ''
      };
      this.step2FormData.push(obj);
    }
  }

  deleteCountry(index) {
    this.step2FormData.splice(index, 1);
  }

  isUBONotAdded() {
    let isNotValid: boolean = this.step5FormData.find(element => (!element.nameOfUBO || !element.country || !element.taxId || !element.taxIdType || !element.typeCode || !element.addressType));
    return (!isNotValid) ? false : true;
  }

  addUBO() {
    let obj = {
      nameOfUBO: '',
      taxId: '',
      taxIdType: '',
      typeCode: '',
      addressType: '',
      country: '',
      state: '',
      address: '',
      pan: '',
      countryOfBirth: '',
      cityOfBirth: '',
      occupationType: 'Business',
      nationality: '',
      dob: '',
      gender: '',
      holding: '30%'
    };
    this.step5FormData.push(obj);
  }

  deleteUBO(index) {
    this.step5FormData.splice(index, 1);
  }

  loadNumbers(n) {
    let special = ['zeroth', 'first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 'tenth', 'eleventh', 'twelfth', 'thirteenth', 'fourteenth', 'fifteenth', 'sixteenth', 'seventeenth', 'eighteenth', 'nineteenth'];
    let deca = ['twent', 'thirt', 'fort', 'fift', 'sixt', 'sevent', 'eight', 'ninet'];
    if (n < 20) return special[n];
    if (n % 10 === 0) return deca[Math.floor(n / 10) - 2] + 'ieth';
    return deca[Math.floor(n / 10) - 2] + 'y-' + special[n % 10];
  }

  onFileSelected(event) {
    if (event.target.files.length > 0) {
      this.uploadedFileName = event.target.files[0].name;
    }
  }

  onDocumentsSelected(event, name) {
    if (event.target.files.length > 0) {
      this.uploadDocuments.forEach(element => {
        if (element.name == name) {
          element.fileName = event.target.files[0].name;
        }
      });
    }
  }

  removeDocuments(name) {
    this.uploadDocuments.forEach(element => {
      if (element.name == name) {
        element.fileName = '';
      }
    });
  }

  disableService(service) {
    let resultData = false;
    this.services.forEach(element => {
      if ((element.name == 'Foreign Exchange / Money Changer Services / Money Lending' || element.name == 'Gaming / Gambling / Lottery Services / Casino Service' || element.name == 'Money Laundering / Pawning') && (element.isChecked)) {
        if (service.name == 'None of these') {
          resultData = true;
        }
      }
      if ((element.name == 'None of these') && (element.isChecked)) {
        if (service.name == 'Foreign Exchange / Money Changer Services / Money Lending' || service.name == 'Gaming / Gambling / Lottery Services / Casino Service' || service.name == 'Money Laundering / Pawning') {
          resultData = true;
        }
      }
    });
    return resultData;
  }

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

  showCountryData(){
    this.showSelectCountry = true;
  }

  selectCountry(country, ind){
    this.showSelectCountry = false;
    this.step2FormData.forEach((element, index) => {
      if(index == ind){
        element.country = country;
      }
    });
  }

  showCountryDataStep6(){
    this.showSelectCountryStep6 = true;
  }

  selectCountryStep6(country, ind){
    this.showSelectCountryStep6 = false;
    this.step5FormData.forEach((element, index) => {
      if(index == ind){
        element.country = country;
      }
    });
  }
  
  showCountryDataOfBirth(){
    this.showSelectCountryOfBirth = true;
  }

  selectCountryOfBirth(country, ind){
    this.showSelectCountryOfBirth = false;
    this.step5FormData.forEach((element, index) => {
      if(index == ind){
        element.countryOfBirth = country;
      }
    });
  }

  toggleSignature(){
    this.showSignature = !this.showSignature;
    this.loadSignature();
  }

}
