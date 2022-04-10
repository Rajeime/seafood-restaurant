import { Component, OnInit, HostListener} from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }
  

  status:boolean = false
  changeNav(menu:any){
    this.status = !this.status;
  }
  
  // @HostListener('window:changeView', ['$event'])
  // showMenu(menu:any){
  //     this.isActive = !this.isActive;
  //   if(this.isActive){
  //     menu.style.display = "block" ;
  //   }
  //   else{
  //     menu.style.display = "none" ;
  //   }
      
  //   }


    // else if (window.innerWidth > 800){
    //   this.isActive = true
    //   menu.style.display = "block"
    // } 

}


