import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-single-details',
  templateUrl: './single-details.component.html',
  styleUrls: ['./single-details.component.scss']
})
export class SingleDetailsComponent implements OnInit {


  Project:any;
  interval:any;
  selectedImage:number = 0;
  constructor(private router:Router) { }

  ngOnInit(): void {
    console.log(this.Project);
    if(localStorage.getItem('targetData')){
      this.Project = JSON.parse(localStorage.getItem('targetData'));
      this.slideImage();
    }
    else{
      this.router.navigate(['/all-projects']);
    }
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
