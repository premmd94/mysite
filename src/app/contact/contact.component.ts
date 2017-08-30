import { Component, OnInit } from '@angular/core';
import { slideInOutAnimation } from '../animations/slide-in.animatios';
declare var $: any;
declare var WOW: any;
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [slideInOutAnimation],
  host: { '[@slideInOutAnimation]': '' }
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(function(){
      new WOW().init();
      $('.section-title').addClass('wow fadeInUp');
    });
  }

}
