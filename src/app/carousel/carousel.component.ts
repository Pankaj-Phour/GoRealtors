import { Component, OnInit } from '@angular/core';
import { Carousel, initTE } from 'tw-elements';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    initTE({Carousel})
  }

}
