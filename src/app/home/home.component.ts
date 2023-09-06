import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
works:any = [
  {image:'assets/locationMarker.png'},
  {image:'assets/payment.png'},
  {image:'assets/secure.png'},
];
featured:any = [
  {image:'assets/locationMarker.png'},
  {image:'assets/payment.png'},
  {image:'assets/secure.png'},
]
  constructor() { }

  ngOnInit(): void {
  }

}
