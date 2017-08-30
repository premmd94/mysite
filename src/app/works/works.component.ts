import { Component, OnInit } from '@angular/core';
import { slideInOutAnimation } from '../animations/slide-in.animatios';
declare var $: any;
declare var WOW: any;

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css'],
  animations: [slideInOutAnimation],
  host: { '[@slideInOutAnimation]': '' }
})
export class WorksComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(function(){
      new WOW().init();
    });
  }

}
