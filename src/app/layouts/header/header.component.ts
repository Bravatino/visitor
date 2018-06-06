import { Component, OnInit } from '@angular/core';
import {environment } from '../../../environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  logoimg : string = ""; 
  systime : number = Date.now();

  ngOnInit() {
    this.logoimg = environment.deployurl + '/assets/' + 'logo-ineight.png';
    console.log(this.systime);
    this.datetimer();
  }

  public datetimer(){
    var dtime = window.setInterval(() => {
      this.systime += 1000;
    }, 1000);
  }

}
