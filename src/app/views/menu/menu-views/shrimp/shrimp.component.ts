import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-shrimp',
  templateUrl: './shrimp.component.html',
  styleUrls: ['./shrimp.component.css']
})
export class ShrimpComponent implements OnInit {

  shrimps:any

  constructor(menuservice:MenuService) { 
    this.shrimps  = menuservice.shrimp()
  }

  ngOnInit(): void {
  }

}
