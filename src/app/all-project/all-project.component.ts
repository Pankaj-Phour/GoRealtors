import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-project',
  templateUrl: './all-project.component.html',
  styleUrls: ['./all-project.component.scss']
})
export class AllProjectComponent implements OnInit {
propertyData:any = [];
  constructor(private _api:ApiService,private router:Router) { }

  ngOnInit(): void {
    this.getProperties();
  }

  projects:any = [
    {
      heading:'Ready to move',
    subHeading:'Explore Ready to move projects near delhi and NCR',
    data:[],
    id:'readyToMove'
  },
    {
      heading:'Under construction',
    subHeading:'Explore Under Construction projects near delhi and NCR',
    data:[],
    id:'underConstruction'
  },
    {
      heading:'Upcoming projects',
    subHeading:'Explore Upcoming projects projects near delhi and NCR',
    data:[],
    id:'upcomingProjects'
  },
  ];


  getProperties(){
    this._api.getApi('/allProperties').subscribe((res:any)=>{
      if(res && !res.error){
        console.log(res);
        this.propertyData = res.response;
        for(let item of res.response){
          if(item.society_type == 'Upcoming projects'){
            this.projects[2].data.push(item);
          }
          else if(item.society_type == 'Under construction'){
            this.projects[1].data.push(item);
          }
          else{
            this.projects[0].data.push(item);
          }
          let arr = item.society_available_flats.map((item:any)=>{
            let string:any;
            if(item.flat_name.match('Pent')){
              string = 5
            }
            else{
              string = +item.flat_name.split(' ')[0];
            }
            return string;
          });
          let arr2 = item.society_available_flats.map((item:any)=>{
            let string:any;
              string = +item.flat_size.split(' ')[0];
            return string;
          });
          item['flats_data'] = Math.min(...arr) + '-' + Math.max(...arr) + ' BHK';
          item['available_sizes'] = Math.min(...arr2) + '-' + Math.max(...arr2) + ' Sq.ft.';
        }
      }
    })
  }

  singleDetails(data:any){
    localStorage.setItem('targetData',JSON.stringify(data));
    this.router.navigate(['/single-details'])
  }

}
