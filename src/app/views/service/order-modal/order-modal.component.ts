import { Component, OnInit } from '@angular/core';
import {faLocation, faCartShopping, faBook, faClose} from '@fortawesome/free-solid-svg-icons'
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-order-modal',
  templateUrl: './order-modal.component.html',
  styleUrls: ['./order-modal.component.css']
})
export class OrderModalComponent implements OnInit {

  faLocation = faLocation;
  faCartShopping = faCartShopping;
  faBook = faBook;
  faClose = faClose;

  value:number = 4
  fishes:any
  conches:any
  lobsters:any
  shrimps:any

  constructor(private menuservice:MenuService) { 
    
    this.fishes = menuservice.fishes()
    this.conches = menuservice.conch()
    this.lobsters = menuservice.lobster()
    this.shrimps = menuservice.shrimp()
  }

  ngOnInit(): void {
  }

}
