import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DataStorageService } from '../../services/data-storage/data-storage.service';
import { UtilsService } from '../../utils/utils.service';

@Component({
  selector: 'app-pan',
  templateUrl: './pan.component.html',
  styleUrls: ['./pan.component.css']
})
export class PanComponent implements OnInit {

  panForm: FormGroup;
  constructor(private router: Router, private storage: DataStorageService, private utils: UtilsService) {     
  }

  //Create Form Controls and Set the value if exist in service
  ngOnInit(): void {
    this.panForm = new FormGroup({
      pan: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)])
    });
    if(this.storage.getData(this.storage.formNames.panForm)){
      this.panForm.patchValue(this.storage.getData(this.storage.formNames.panForm));
    }
  }

  //Get form controls value
  get panFormControl() {
    return this.panForm.controls;
  }

  //Data will be stored into service and navigate to next form
  submit() {
    if (this.panForm.valid) {
      this.storage.setData(this.storage.formNames.panForm, this.panForm.value);
      this.router.navigate(['/sme/pan-verify']);
    }
  }

  panchangeEvent(event) {
    return this.utils.keyPressAlphanumeric(event);
  }

}
