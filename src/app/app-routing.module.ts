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
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {component:AboutComponent, path:"about"},
  {component:ContactComponent, path:"contactus"},
  {component:HomeComponent, path:"home"},
  {component:MenuComponent, path:"menu",
  children: [
    {path: '', redirectTo: '/menu/conch', pathMatch: 'full'},
    {component:ConchComponent, path:"conch" , data:{animation:'isLeft'}},
    {component:FishComponent, path:"fish", data:{animation:'isLeft'}},
    {component:LobsterComponent, path:"lobster", data:{animation:'isLeft'}},
    {component:ShrimpComponent, path:"shrimp", data:{animation:'isLeft'}}
  ] 
},
  {component:ServiceComponent, path:"services"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
