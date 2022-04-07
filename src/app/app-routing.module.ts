import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './views/about/about.component';
import { ContactComponent } from './views/contact/contact.component';
import { HomeComponent } from './views/home/home.component';
import { MenuComponent } from './views/menu/menu.component';
import { ServiceComponent } from './views/service/service.component';

const routes: Routes = [ 
  {component:AboutComponent, path:"about"},
  {component:ContactComponent, path:"contactus"},
  {component:HomeComponent, path:"home"},
  {component:MenuComponent, path:"menu"},
  {component:ServiceComponent, path:"services"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
