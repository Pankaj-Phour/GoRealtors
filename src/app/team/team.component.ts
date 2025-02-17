import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  constructor(private _api:ApiService,private sanitizer:DomSanitizer){}
  agents:any = [
    {
      name:'Mr. Suraj Dahiya',
    about:'Mr. Suraj is one of our senior team members and co-founder of GoRealtors. They have helped more than 200 families in finding their dream house with their pocket friendly prices. He was formarly working in Raheja Atharva as CRM. Mr. Suraj is having a total experience of around 8-10 years in the field of realestate. Mr. Suraj is one of our senior team members and co-founder of GoRealtors. They have helped more than 200 families in finding their dream house with their pocket friendly prices. He was formarly working in Raheja Atharva as CRM. Mr. Suraj is having a total experience of around 8-10 years in the field of realestate.',
  },
    {
      name:'Mr. Ashish Maan',
    about:'Mr. Ashish is one of our senior team members and co-founder of GoRealtors. They have helped more than 200 families in finding their dream house with their pocket friendly prices. He was formarly working in Raheja Atharva as CRM. Mr. Suraj is having a total experience of around 8-10 years in the field of realestate. Mr. Ashish is one of our senior team members and co-founder of GoRealtors. They have helped more than 200 families in finding their dream house with their pocket friendly prices. He was formarly working in Raheja Atharva as CRM. Mr. Suraj is having a total experience of around 8-10 years in the field of realestate.',
  },
    {
      name:'Mr. Ashok Topa',
    about:'Mr. Ashok is one of our senior team members and co-founder of GoRealtors. They have helped more than 200 families in finding their dream house with their pocket friendly prices. He was formarly working in Raheja Atharva as CRM. Mr. Suraj is having a total experience of around 8-10 years in the field of realestate. Mr. Ashok is one of our senior team members and co-founder of GoRealtors. They have helped more than 200 families in finding their dream house with their pocket friendly prices. He was formarly working in Raheja Atharva as CRM. Mr. Suraj is having a total experience of around 8-10 years in the field of realestate.',
  },
    {
      name:'Mr. Arpit Tyagi',
    about:'Mr. Arpit is one of our senior team members and co-founder of GoRealtors. They have helped more than 200 families in finding their dream house with their pocket friendly prices. He was formarly working in Raheja Atharva as CRM. Mr. Suraj is having a total experience of around 8-10 years in the field of realestate. Mr. Arpit is one of our senior team members and co-founder of GoRealtors. They have helped more than 200 families in finding their dream house with their pocket friendly prices. He was formarly working in Raheja Atharva as CRM. Mr. Suraj is having a total experience of around 8-10 years in the field of realestate.',
    image:'assets/arpit.jpg'
  },
  ]

  ngOnInit(): void {
    this.getStaffList();
    this.agents = [];
  }



  getStaffList(){
    this._api.getStaffList('/allAgents').subscribe((res:any)=>{
      console.log("List of staff ",res);
      if(res && !res.error){
        this.agents = res.response;
        for(let agent of this.agents){
          // agent['newImage'] = 'https://drive.google.com/uc?id=YOUR_FILE_ID'
        // agent['newImage'] = agent.image.substring(0,agent.image.length-17) + 'preview?embedded=true';
        // agent['newImage'] = this.sanitizer.bypassSecurityTrustResourceUrl(agent['newImage']);
        // console.log(agent['newImage']['changingThisBreaksApplicationSecurity']);
          
          // agent['newImage'] = this.sanitizer.bypassSecurityTrustResourceUrl(agent.image);
        }
      }
    })
  }

}
