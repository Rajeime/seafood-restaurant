import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './views/about/about.component';
import { ContactComponent } from './views/contact/contact.component';
import { HomeComponent } from './views/home/home.component';
import { ConchComponent } from './views/menu/menu-views/conch/conch.component';
import { FishComponent } from './views/menu/menu-views/fish/fish.component';
import { LobsterComponent } from './views/menu/menu-views/lobster/lobster.component';
import { ShrimpComponent } from './views/menu/menu-views/shrimp/shrimp.component';
import { MenuComponent } from './views/menu/menu.component';
import { ServiceComponent } from './views/service/service.component';

const routes: Routes = [ 
  {component:AboutComponent, path:"about"},
  {component:ContactComponent, path:"contactus"},
  {component:HomeComponent, path:"home"},
  {component:MenuComponent, path:"menu",
  children: [
    {component:ConchComponent, path:"conch"},
    {component:FishComponent, path:"fish"},
    {component:LobsterComponent, path:"lobster"},
    {component:ShrimpComponent, path:"shrimp"}
  ]
},
  {component:ServiceComponent, path:"services"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
