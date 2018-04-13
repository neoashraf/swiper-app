import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-swiper-navigation',
  templateUrl: './swiper-navigation.component.html',
  styleUrls: ['./swiper-navigation.component.css']
})
export class SwiperNavigationComponent implements OnInit {

  texts: string[];
  config: any = {
    // pagination: {
    // el: '.swiper-pagination',
    // },
    // paginationClickable: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    spaceBetween: 30
  };

  constructor() {}

  ngOnInit() {
    this.texts = [
      'Slide-1',
      'Slide-2',
      'Slide-3'
    ];
  }


}
