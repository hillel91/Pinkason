import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.Emulated,

})
export class HomeComponent implements OnInit {
  [x: string]: any;
  
  title="Book Stor"
/*
  onkeyup(value){
    this.name=value;
  }

  onkSecond(value){
    this.NA=value;
  }
*/


  constructor() { }

  ngOnInit() {
  }

}
