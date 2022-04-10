import { Directive, ElementRef, HostListener, HostBinding, asNativeElements} from '@angular/core';
import { elementAt } from 'rxjs';

@Directive({
  selector: '[appHamburgerMenu]'
})
export class HamburgerMenuDirective {

  // @HostBinding('toggle-nav') isActive: boolean = false;

  // constructor(private element:ElementRef) { }

  // @HostListener('click',['$event'])
  // onClick(event: Event) {
  //   this.isActive = this.element.nativeElement.contains(event.target)? !this.isActive:false;
  //   let targets = this.element.nativeElement.children;
  //   if(this.isActive){
  //   targets[0].style.transform = "rotate(-45deg)translate(-5px,6px)";
  //   targets[1].style.opacity = "0";
  //   targets[2].style.transform = "rotate(45deg)translate(-5px,-6px)";
  //   }
  //   else{
  //     this.isActive = false;
  //     targets[0].style.transform = "rotate(90deg)translate(0px,0px)";
  //     targets[1].style.opacity = "1";
  //     targets[0].style.transform = "rotate(-45deg)translate(0px,0px)";
  //   }}
    // this.isActive = !this.isActive
    
    // let targets = this.element.nativeElement.children
    // if(this.isActive){
    // targets[0].style.transform = "rotate(-45deg)translate(-5px,6px)";
    // targets[1].style.opacity = "0";
    // targets[2].style.transform = "rotate(45deg)translate(-5px,-6px)";
    //  for(let i = 0; i < targets.length; i++){
    //   targets[i]. target.style.transition = "5s";
    //  }
    }
    
  // }

