import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  mobileNav:boolean = false;
  burger:any;
  nav:any;
  navOpen:boolean = false;
  constructor(private router:Router, private _api:ApiService) { }

  ngOnInit(): void {
    this._api.closeSidebarEmitter.subscribe((data:boolean)=>{
      data === true ? this.navOpen = false : '';
    })
    this.burger = document.getElementById('burger');
     this.nav    = document.getElementById('main-nav');
  }

toggleNav(){
  console.log("Hello from toggle nav");
  setTimeout(() => {
    
    this.navOpen = !this.navOpen;
  }, 100);
  // this.classList.toggle('is-open');
	this.nav.classList.toggle('is-open');
}

  closeNav(link:any){
    console.log(link);
    if(link !== ''){
      this.router.navigate([link])
    }
    this.mobileNav = false;
  }


  scrollTo(id:string){
    const element = document.getElementById(id);
    element.scrollIntoView({behavior:'smooth',block:'start'})
  }



}
