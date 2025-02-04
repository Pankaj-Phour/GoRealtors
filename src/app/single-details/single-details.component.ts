import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-details',
  templateUrl: './single-details.component.html',
  styleUrls: ['./single-details.component.scss']
})
export class SingleDetailsComponent implements OnInit {


  Project:any = {
    name:'Raheja Atharva',
    image:'',
    allImages:[
      {image:'https://raheja.com/images/raheja-atharva/banner3.jpg'},
      {image:'https://d13ir9awo5x8gl.cloudfront.net/dyn-res/project/image/project_1653676794700.webp'},
      {image:'https://www.rahejadeveloper.in/raheja-atharva/assets/images/gallery/2.webp'},
      {image:'https://raheja.com/images/raheja-atharva/sample-flat/atharva-sf-big6.jpg'},
      {image:'https://is1-2.housingcdn.com/01c16c28/7b9b1ac34ce277d05ad375cfa416e4f1/v0/fs/3_bhk_apartment-for-rent-sector_109_gurgaon-Gurgaon-others.jpg'},
      {image:'https://img.squareyards.com/secondaryPortal/638300262714997509-1109231051115111.jpg'},
      {image:'https://raheja.com/images/raheja-atharva/sample-flat/atharva-sf-big1.jpg'},
    ],
    location:'Dwarka exressway Projects',
    available:{
      title:'Available Flats',
      text : 'Click to view details of the flat',
      flats:[
        {type:'1  BHK',size:'1300 sq. ft.',image:'https://im.proptiger.com/2/5525754/12/atharva-floor-plan-floor-plan-948031.jpeg?width=480&height=320'},
        {type:'2  BHK',size:'1300 sq. ft.',image:'https://im.proptiger.com/2/5525754/12/atharva-floor-plan-floor-plan-948031.jpeg?width=480&height=320'},
        {type:'3  BHK',size:'1300 sq. ft.',image:'https://im.proptiger.com/2/5525754/12/atharva-floor-plan-floor-plan-948031.jpeg?width=480&height=320'},
        {type:'4  BHK',size:'1300 sq. ft.',image:'https://im.proptiger.com/2/5525754/12/atharva-floor-plan-floor-plan-948031.jpeg?width=480&height=320'},
      ]
    },
    amenities: {
      data : [
        {name : 'Parking',type:'parking.webp'},
        {name : '24 X 7 Security',type:'security.webp'},
        {name : 'Gym',type:'gym.webp'},
        {name : 'Swimming Pool',type:'swimming_pool.webp'},
        {name : 'School',type:'school.webp'},
        {name : 'Spa Sauna',type:'spa.webp'},
        {name : 'Hospital',type:'medical_support.webp'},
        {name : 'Elevator',type:'elevator.png'},
      ]

          
    },

  };
  interval:any;
  selectedImage:number = 0;
  constructor() { }

  ngOnInit(): void {
    console.log(this.Project);
    this.slideImage();
  }

  selectImage(index:number){
    this.selectedImage = index;
    clearInterval(this.interval)
    this.slideImage();
  }

  slideImage(){
   this.interval = setInterval(()=>{
      if(this.selectedImage === this.Project.allImages.length-1){
        this.selectedImage = 0;
      }
      else{
        this.selectedImage += 1;
      }
    },5000)
    
  }


  slideChange(e:any){
    console.log(e);
    
  }
}
