import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {



  constructor() { }

  fishes(){
    return [
      {name:"Curry Fish", img:"/assets/menu-items/coconut-curry-fish.jpg", price:2000},
      {name:"Escovitch Fish" , img:"/assets/menu-items/escoveitched-fish.jpg", price:2000},
      {name:"Steam Fish" , img:"/assets/menu-items/steam-fish.jpg", price:2000},
      // {name:"Brown StewFish"},
    ]
  }
}
