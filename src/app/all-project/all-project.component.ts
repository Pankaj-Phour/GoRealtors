import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-project',
  templateUrl: './all-project.component.html',
  styleUrls: ['./all-project.component.scss']
})
export class AllProjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  projects:any = [
    {
      heading:'Ready to move',
    subHeading:'Explore Ready to move projects near delhi and NCR',
    cards:[1,2,3,4,5,6,7,8,9,10,11],
    id:'readyToMove'
  },
    {
      heading:'Under construction',
    subHeading:'Explore Ready to move projects near delhi and NCR',
    cards:[1,2,3,4,5,6,7,8,9,10,11],
    id:'underConstruction'
  },
    {
      heading:'Upcoming projects',
    subHeading:'Explore Ready to move projects near delhi and NCR',
    cards:[1,2,3,4,5,6,7,8,9,10,11],
    id:'upcomingProjects'
  },
  ]

}
