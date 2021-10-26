import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transact',
  templateUrl: './transact.component.html',
  styleUrls: ['./transact.component.css']
})
export class TransactComponent implements OnInit {
  flag: boolean = true;

  constructor() { }
  onClickTransact() {

  }
  ngOnInit() {

  }
  //   onCLick(){
  //   const myElement = (<HTMLElement>document.querySelector('#bx-pager'));
  //   if(myElement.getAttributeNames()){
  //   myElement.parentElement[2].classList.add('new-class');
  // }
  // else{
  //   myElement.parentElement[3].classList.remove('new-class');
  // }
  // }

}
