import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  public formData: any = {};
  public formNames: any = {
    panForm: 'PanForm',
    panVerifyForm: 'PanVerifyForm',
  }
  constructor() { }

  setData(objProp, data){
    this.formData[objProp] = data;
  }

  getData(objProp){
    return this.formData[objProp];
  }
}
