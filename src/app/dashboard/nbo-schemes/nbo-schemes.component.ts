import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-nbo-schemes',
  templateUrl: './nbo-schemes.component.html',
  styleUrls: ['./nbo-schemes.component.css']
})
export class NBOSchemesComponent implements OnInit {
  config: SwiperOptions = {
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    spaceBetween: 30
  };
  constructor() { }

  ngOnInit(): void {
  }

}
