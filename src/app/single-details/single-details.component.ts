import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-details',
  templateUrl: './single-details.component.html',
  styleUrls: ['./single-details.component.scss']
})
export class SingleDetailsComponent implements OnInit {


  Project:any = {
    name:'',
    image:'',
    allImages:[
      {image:'https://raheja.com/images/raheja-atharva/banner3.jpg'},
      {image:'https://d13ir9awo5x8gl.cloudfront.net/dyn-res/project/image/project_1653676794700.webp'},
      {image:'https://www.rahejadeveloper.in/raheja-atharva/assets/images/gallery/2.webp'},
      {image:'https://raheja.com/images/raheja-atharva/sample-flat/atharva-sf-big6.jpg'},
      {image:'https://is1-2.housingcdn.com/01c16c28/7b9b1ac34ce277d05ad375cfa416e4f1/v0/fs/3_bhk_apartment-for-rent-sector_109_gurgaon-Gurgaon-others.jpg'},
      {image:'https://img.squareyards.com/secondaryPortal/638300262714997509-1109231051115111.jpg'},
      {image:'https://raheja.com/images/raheja-atharva/sample-flat/atharva-sf-big1.jpg'},
    ]
  }
  selectedImage:number = 0;
  constructor() { }

  ngOnInit(): void {
    console.log(this.Project);
    this.slideImage();
  }

  selectImage(index:number){
    this.selectedImage = index;
  }

  slideImage(){
    setInterval(()=>{
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
