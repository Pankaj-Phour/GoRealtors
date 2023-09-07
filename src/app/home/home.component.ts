import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

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
  {image:'assets/feature1.svg'},
  {image:'assets/feature2.svg'},
  {image:'assets/feature3.svg'},
]
  constructor(private _api:ApiService) { }

  ngOnInit(): void {
  }


  // This function is to remove the sidebar while clicking on the home page anywhere outside the sidebar 
  removeSideNav(){
    console.log("Hello  from remove nav function");
    this._api.closeSideBar(true)
  }
}
