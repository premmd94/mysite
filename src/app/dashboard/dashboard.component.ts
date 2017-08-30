import { Component, OnInit } from '@angular/core';
import { slideInOutAnimation } from '../animations/slide-in.animatios';
declare var $: any;
declare var WOW: any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [slideInOutAnimation],
  host: { '[@slideInOutAnimation]': '' }
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
