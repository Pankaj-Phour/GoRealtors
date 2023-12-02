import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  
  // Declaring behaviour subjects here 
  private _notify = new BehaviorSubject<any>({status: 'success', message: 'message', start: false, code: 200});
  notify$ = this._notify.asObservable();

  obNotify(data: any): void {
    // console.log(data);
    
    this._notify.next(data);
  }

  clientData(endpoint:any,params:any){
    return this.http.post(environment.Url + endpoint,params)
  }

  @Output() closeSidebarEmitter = new EventEmitter();

  closeSideBar(data:boolean){
    this.closeSidebarEmitter.emit(data)
  }
}
