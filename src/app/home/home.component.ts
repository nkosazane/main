import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  name:string;
  surname:string;
  age:number;
  constructor(private home:Router) {}
 submit()
 {
   this.home.navigateByUrl("about");
 }

  ngOnInit() {
  }

}
