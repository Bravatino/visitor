import { Component, OnInit } from '@angular/core';
import {environment } from '../../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  private router: Router;

  constructor(router: Router) { 
    this.router = router;  
  }
  logoimg : string = ""; 
  systime : number = Date.now();

  ngOnInit() {
    this.logoimg = environment.deployurl + '/assets/' + 'logo-ineight.png';
    console.log(this.router.url);
    this.datetimer();
  }

  public datetimer(){
    var dtime = window.setInterval(() => {
      this.systime += 1000;
    }, 1000);
  }

}
