import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
@Output() targetId = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  scrollToTarget(id:any){
    this.targetId.emit(id)
  }

  contact(index:number,target:string){
    console.log(index,target);
    if(index == 1){
      window.open(`tel:${target}`,"_blank")
    }
    else if(index == 2){
      window.open(`mailTo:${target}`,"_blank")
    }
    else if(index == 3){
      window.open(`https://wa.me/${target}`,"_blank")
    }
  }

  route(){
    window.open('https://www.google.com/maps/place//data=!4m2!3m1!1s0x390d11dec017b5f5:0xa08c29f46bf7095e?entry=s&sa=X&ved=2ahUKEwic29qzz52EAxVUxjgGHdY1A-oQ4kB6BAgSEAA','_blank')
  }
}
