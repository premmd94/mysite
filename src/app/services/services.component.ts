import { Component, OnInit } from '@angular/core';
declare var $: any;
declare var WOW: any;

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(function(){
      new WOW().init();
      $('.services-section').addClass("wow fadeInUp");
    });
  }

}
