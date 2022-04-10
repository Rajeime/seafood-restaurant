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
      {name:"Brown Stew Fish" , img:"/assets/menu-items/brown-stew.jpg", price:2000},
      {name:"Steam Fish" , img:"/assets/menu-items/steam-fish.jpg", price:2000},
      {name:"Roast Fish" , img:"/assets/menu-items/grill-fish.jpg", price:2000},
      {name:"Roast Fish" , img:"/assets/menu-items/grill-fish.jpg", price:2000}
      // {name:"Steam Fish" , img:"/assets/menu-items/steam-fish.jpg", price:2000}
      // {name:"Brown StewFish"},
    ]
  }

  lobster(){
    return [
      {name:"Grill/Deep Fried Lobster", img:"/assets/menu-items/Fried-Lobster-tails.jpg", price:2600},
      {name:"Lobster In Garlic" , img:"/assets/menu-items/garlic-lobster.jpg", price:2600},
      {name:"Curry Lobster" , img:"/assets/menu-items/curry-lobster.jpg", price:2400},
      // {name:"Steam Fish" , img:"/assets/menu-items/steam-fish.jpg", price:2000}
      // {name:"Brown StewFish"},
    ]
  }

  shrimp(){
    return [
      {name:"Curry Shrimp", img:"/assets/menu-items/curry-shrimp.jpg", price:2100},
      {name:"Garlic Shrimp" , img:"/assets/menu-items/garlic-shrimp.jpg", price:2100},
      {name:"Shrimp In Batter" , img:"/assets/menu-items/fried-shrimp.jpg", price:2000},
      // {name:"Steam Fish" , img:"/assets/menu-items/steam-fish.jpg", price:2000}
      // {name:"Brown StewFish"},
    ]
  }

  conch(){
    return [
      {name:"Stew Conch", img:"/assets/menu-items/Stew-Conch.jpg", price:2100},
      {name:"Curry Conch" , img:"/assets/menu-items/currry-conch.jpg", price:2100},
      {name:"Shrimp In Batter" , img:"/assets/menu-items/fried-shrimp.jpg", price:2000},
      // {name:"Steam Fish" , img:"/assets/menu-items/steam-fish.jpg", price:2000}
      // {name:"Brown StewFish"},
    ]
  }
}
