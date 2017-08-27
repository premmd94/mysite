import { Component, OnInit } from '@angular/core';
declare var $: any;
declare var WOW: any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(function(){
      new WOW().init();
      $('.e').jCarousel({
        type:'opacx'
        
     });
    });
  }

}
