import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isActive: boolean = false;

  showMenu(menu:any){
    
    this.isActive = !this.isActive;
    if(this.isActive){
      menu.style.display = "block" ;
      menu.style.transition = "all 4s"
    }

    else{
      menu.style.display = "none" ;
      menu.style.transition = "all 4s"
    }

  }
}
