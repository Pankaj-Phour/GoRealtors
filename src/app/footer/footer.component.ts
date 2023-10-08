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

}
