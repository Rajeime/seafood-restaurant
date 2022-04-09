import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-fish',
  templateUrl: './fish.component.html',
  styleUrls: ['./fish.component.css']
})
export class FishComponent implements OnInit {

  fishes:any

  constructor(private menuservice:MenuService) { 
    
    this.fishes = menuservice.fishes()
  }

  ngOnInit(): void {
    
  }
  

}
