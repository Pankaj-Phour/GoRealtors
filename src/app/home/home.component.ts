import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  searchForm:FormGroup;
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

projects:any = [
  {
    heading:'Ready to move',
  subHeading:'Explore Ready to move projects near delhi and NCR',
  cards:[1,2],
  id:'readyToMove'
},
  {
    heading:'Under construction',
  subHeading:'Explore Ready to move projects near delhi and NCR',
  cards:[1,2],
  id:'underConstruction'
},
  {
    heading:'Upcoming projects',
  subHeading:'Explore Ready to move projects near delhi and NCR',
  cards:[1,2],
  id:'upcomingProjects'
},
]
  constructor(private _api:ApiService,private _fb:FormBuilder) { }

  ngOnInit(): void {
    this.validation();
  }

  validation(){
    this.searchForm = this._fb.group({
      search:['',Validators.required]
    })
  }

  // This function is to remove the sidebar while clicking on the home page anywhere outside the sidebar 
  removeSideNav(){
    console.log("Hello  from remove nav function");
    this._api.closeSideBar(true)
  }

  search(){
    console.log(this.searchForm.value)
  }

  scrollToTarget(id:any){
    let element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth", block: "start" })
  }
}
