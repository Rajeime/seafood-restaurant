import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-conch',
  templateUrl: './conch.component.html',
  styleUrls: ['./conch.component.css']
})
export class ConchComponent implements OnInit {
  conches:any

  constructor(menuservice:MenuService) { 
    this.conches  = menuservice.conch()
  }

  ngOnInit(): void {
  }

}
