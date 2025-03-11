import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-all-project',
  templateUrl: './all-project.component.html',
  styleUrls: ['./all-project.component.scss']
})
export class AllProjectComponent implements OnInit {
propertyData:any = [];
  constructor(private _api:ApiService) { }

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
      if(res && res.error){
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
        }
        console.log(this.projects);
        
      }
    })
  }

}
