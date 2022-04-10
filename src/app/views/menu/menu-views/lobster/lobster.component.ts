import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-lobster',
  templateUrl: './lobster.component.html',
  styleUrls: ['./lobster.component.css']
})
export class LobsterComponent implements OnInit {
  
  lobsters:any

  constructor(menuservice:MenuService) { 
    this.lobsters  = menuservice.lobster()
  }

  ngOnInit(): void {
  }

 

}
