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
    amentities: {
      title: 'Exclusive amentities',
      text : 'Explore state-of-art amentities',
      data : [
        {name : 'Parking',image:'https://static.wixstatic.com/media/6665ff_3d4c43e96a934760b0eff4da0113b23b~mv2.jpeg/v1/crop/x_94,y_0,w_375,h_375/fill/w_96,h_96,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/parking.jpeg'},
        {name : '24 X 7 Security',image:'https://static.wixstatic.com/media/6665ff_a6fde5380b66495e945a476de45d6466~mv2.jpeg/v1/fill/w_96,h_96,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/SUR.jpeg'},
        {name : 'Gym',image:'https://static.wixstatic.com/media/6665ff_f4f3e4d37134460fa38dc239d345ab32~mv2.png/v1/fill/w_55,h_55,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2.png'},
        {name : 'Swimming Pool',image:'https://static.wixstatic.com/media/6665ff_cb341b29e54943a7a9a1ef9717d853f6~mv2.png/v1/crop/x_0,y_28,w_525,h_525/fill/w_96,h_96,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Screenshot%202023-11-07%20at%2011_48_41%20AM.png'},
        {name : 'School',image:'https://static.wixstatic.com/media/6665ff_bcbfb99287ee49e88f43f282eda59576~mv2.jpeg/v1/fill/w_96,h_96,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/SCHOOL.jpeg'},
        {name : 'Spa Sauna',image:'https://static.wixstatic.com/media/6665ff_5b50917b5eb44c8c8df6c28221510ba4~mv2.jpeg/v1/crop/x_1,y_2,w_562,h_562/fill/w_96,h_96,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/spa.jpeg'},
        {name : 'Hospital',image:'https://static.wixstatic.com/media/6665ff_4b1384d9f7d14921837c329b06dff7cc~mv2.jpeg/v1/fill/w_101,h_101,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/HOS.jpeg'},
        {name : 'Elevator',image:'https://cdn-icons-png.flaticon.com/512/230/230531.png'},
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
