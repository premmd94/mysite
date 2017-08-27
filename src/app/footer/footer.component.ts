import { Component, OnInit } from '@angular/core';
declare var $: any;
declare var WOW: any;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(function(){
      new WOW().init();
    });
  }

}
