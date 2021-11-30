import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DataStorageService } from '../../services/data-storage/data-storage.service';
import { UtilsService } from '../../utils/utils.service';

@Component({
  selector: 'app-pan-verify',
  templateUrl: './pan-verify.component.html',
  styleUrls: ['./pan-verify.component.css']
})
export class PanVerifyComponent implements OnInit {

  panVerifyForm: FormGroup;
  submitted: boolean = false;
  constructor(private storage: DataStorageService, private router: Router, private utils: UtilsService) { }

  //Create Form Controls and Set the value if exist in service
  ngOnInit(): void {
    this.panVerifyForm = new FormGroup({
      pan: new FormControl('', Validators.required)
    });
    if (this.storage.getData(this.storage.formNames.panForm)) {
      this.panVerifyForm.patchValue(this.storage.getData(this.storage.formNames.panForm));
    }
  }

  //Get form controls value
  get panVerifyFormControl() {
    return this.panVerifyForm.controls;
  }

  //Data will be stored into service and navigate to next form
  submit() {
    this.storage.setData(this.storage.formNames.panVerifyForm, this.panVerifyForm.value);
    // this.router.navigate(['/sme/pan-verify']);
  }

  panchangeEvent(event) {
    return this.utils.keyPressAlphanumeric(event);
  }

}

