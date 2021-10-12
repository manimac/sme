import { Component, Input, OnInit,OnDestroy } from '@angular/core';
import { theme } from 'highcharts';
import { SwiperOptions } from 'swiper';
import { StyleService } from '../style.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css',

],
  //encapsulation: ViewEncapsulation.None ,
  
  providers: [] 
})
export class DashboardComponent implements OnInit  {
  //element: HTMLElement;
  slideData = [
    {
      id: 382,
      imgs: "saving-solution.svg",
    }, {
      id: 822,
      imgs: "saving-solution.svg",
    }, {
      id: 159,
      imgs: "saving-solution.svg",
    }, {
      id: 424,
      imgs: "saving-solution.svg",
    }, {
      id: 572,
      imgs: "saving-solution.svg",
    }, {
      id: 127,
      imgs: "saving-solution.svg",
    }, {
      id: 1009,
      imgs: "saving-solution.svg",
    }, {
      id: 619,
      imgs: "saving-solution.svg",
    }, {
      id: 716,
      imgs: "saving-solution.svg",
    }, {
      id: 382,
      imgs: "saving-solution.svg",
    }
  ]

  config: SwiperOptions = {
    pagination: { el: '.swiper-pagination', clickable: true },
    loop: true,
    autoHeight: true,
    //allowTouchMove: true,
    autoplay: {
     
      delay: 3000,
      disableOnInteraction: true,
    },
    
    spaceBetween: 50,
    breakpoints: {
      1024: {
        slidesPerView: 4
      },
      500: {
        slidesPerView: 3
      },
      400: {
        slidesPerView: 2
      },
      300: {
        slidesPerView: 1
      }
    },
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev'
    // },
    
  };

  constructor(private styleService: StyleService) { 
    
  }
 
  ngOnInit(): void {
    
    //document.getElementById('theme').setAttribute('href','../../assets/css/custom.css');
    
 
  }
 

}
