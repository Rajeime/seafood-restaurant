import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isSubmitted:boolean = false

contactForm = new FormGroup({
  userName: new FormControl('', [Validators.required]),
  email: new FormControl('', [Validators.required]),
  text: new FormControl('' ,[Validators.required])
})

submitForm(){
  this.isSubmitted = true
}


get userName(){
  return this.contactForm.get('userName')
}

get email(){
  return this.contactForm.get('email')
}

get text(){
  return this.contactForm.get('text')
}
}
