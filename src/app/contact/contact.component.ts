import { Component, OnInit } from '@angular/core';
import{Router}from'@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  name:string;
  phone:number;
  email:string;
  subject:string;
  message:string;

  constructor(private router:Router) { }
  send(){
console.log(this.name);
console.log(this.phone);
console.log(this.email);
console.log(this.subject);
console.log(this.message);
  }

  ngOnInit() {
  }

}
