import { Component, OnInit } from '@angular/core';
declare var $: any;
declare var WOW: any;
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
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
