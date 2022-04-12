import { Component, OnInit, HostListener, OnDestroy} from '@angular/core';
import { fromEvent, Observable, Subscription } from "rxjs";
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {

  constructor() { }

  // resizeObservable$!: Observable<Event>;
  // resizeSubscription$!: Subscription; 

  ngOnInit(): void {
    // this.resizeObservable$ = fromEvent(window, 'resize')
    // this.resizeSubscription$ = this.resizeObservable$.subscribe( evt => {
    //   console.log('event: ', evt)
    // })
  }

  ngOnDestroy() {
    // this.resizeSubscription$.unsubscribe()
}
  

  checkNav:boolean = false
  
  changeNav(menu:any){
    this.checkNav = !this.checkNav;

    if(this.checkNav){
      menu.style.display = "block"
    }

    else{
      menu.style.display = "none"
    }
  }

  @HostListener('window:resize' , ['$event'])
  onResize(event:any){
    if(window.innerWidth >= 800){
      event.style.display = "block";
    }

   
    // else{
    //   event.style.display ="none"
    // }
  }
 

}


