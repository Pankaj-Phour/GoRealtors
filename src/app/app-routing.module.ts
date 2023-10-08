import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'projects',
    component:ProjectsComponent
  },
  {
    path:'carousel',
    component:CarouselComponent
  },
  {
    path:'footer',
    component:FooterComponent
  },
  {
    path:'team',
    component:TeamComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
