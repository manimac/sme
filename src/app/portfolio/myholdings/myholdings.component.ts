import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myholdings',
  templateUrl: './myholdings.component.html',
  styleUrls: ['./myholdings.component.css']
})
export class MyholdingsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public highlightItem(event) {
    var element = document.getElementById("myDIV");
    element.classList.remove("mys");
  }
}
