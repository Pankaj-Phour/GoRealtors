import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  constructor(private _api:ApiService){}
  agents:any = [
    {
      name:'Mr. Suraj Dahiya',
    details:'Mr. Suraj is one of our senior team members and co-founder of GoRealtors. They have helped more than 200 families in finding their dream house with their pocket friendly prices. He was formarly working in Raheja Atharva as CRM. Mr. Suraj is having a total experience of around 8-10 years in the field of realestate.',
    image:'https://scontent.fdel10-1.fna.fbcdn.net/v/t1.18169-9/395527_223063954443720_251683273_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=pLHfsfs-JpAAX_fzMY-&_nc_ht=scontent.fdel10-1.fna&oh=00_AfC8tm2LPqzhoDwVWznQUAuosT5D434bimEIQdm4ykpyig&oe=654A28CA'
  },
    {
      name:'Mr. Ashish Maan',
    details:'Mr. Ashish is one of our senior team members and co-founder of GoRealtors. They have helped more than 200 families in finding their dream house with their pocket friendly prices. He was formarly working in Raheja Atharva as CRM. Mr. Suraj is having a total experience of around 8-10 years in the field of realestate.',
    image:'https://scontent.fdel10-1.fna.fbcdn.net/v/t1.6435-9/163189857_2849115292035805_3962282576531215720_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7a1959&_nc_ohc=9N1OSFOihPgAX8TAkig&_nc_ht=scontent.fdel10-1.fna&oh=00_AfCkqhL58XPl46bd-UGMusK2mtnHaYny8OskBgxgTbVMug&oe=654A290F'
  },
    {
      name:'Mr. Ashok Topa',
    details:'Mr. Ashok is one of our senior team members and co-founder of GoRealtors. They have helped more than 200 families in finding their dream house with their pocket friendly prices. He was formarly working in Raheja Atharva as CRM. Mr. Suraj is having a total experience of around 8-10 years in the field of realestate.',
    image:'https://scontent.fdel10-1.fna.fbcdn.net/v/t1.18169-9/395527_223063954443720_251683273_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=pLHfsfs-JpAAX_fzMY-&_nc_ht=scontent.fdel10-1.fna&oh=00_AfC8tm2LPqzhoDwVWznQUAuosT5D434bimEIQdm4ykpyig&oe=654A28CA'
  },
    {
      name:'Mr. Arpit Tyagi',
    details:'Mr. Arpit is one of our senior team members and co-founder of GoRealtors. They have helped more than 200 families in finding their dream house with their pocket friendly prices. He was formarly working in Raheja Atharva as CRM. Mr. Suraj is having a total experience of around 8-10 years in the field of realestate.',
    image:'assets/arpit.jpg'
  },
  ]

  ngOnInit(): void {
    this.getStaffList();
  }



  getStaffList(){
    this._api.getStaffList('/allAgents').subscribe((res:any)=>{
      console.log("List of staff ",res);
      
    })
  }

}
