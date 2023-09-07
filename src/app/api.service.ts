import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  @Output() closeSidebarEmitter = new EventEmitter();

  closeSideBar(data:boolean){
    this.closeSidebarEmitter.emit(data)
  }
}
