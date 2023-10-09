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
}
