import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MenuComponent } from './views/menu/menu.component';
import { HomeComponent } from './views/home/home.component';
import { ServiceComponent } from './views/service/service.component';
import { AboutComponent } from './views/about/about.component';
import { ContactComponent } from './views/contact/contact.component';
import { ConchComponent } from './views/menu/menu-views/conch/conch.component';
import { FishComponent } from './views/menu/menu-views/fish/fish.component';
import { LobsterComponent } from './views/menu/menu-views/lobster/lobster.component';
import { ShrimpComponent } from './views/menu/menu-views/shrimp/shrimp.component';
import { HamburgerMenuDirective } from './directives/hamburger-menu.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MenuComponent,
    HomeComponent,
    ServiceComponent,
    AboutComponent,
    ContactComponent,
    ConchComponent,
    FishComponent,
    LobsterComponent,
    ShrimpComponent,
    HamburgerMenuDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
