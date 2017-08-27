import { Component, OnInit } from '@angular/core';
declare var $: any;
declare var WOW: any;

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(function(){
      new WOW().init();
    });
  }

}
