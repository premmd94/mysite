import { Component, OnInit } from '@angular/core';
declare var $: any;
declare var WOW: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(function(){
      $('body').click(function(event){
        var x = $('.header-button button i');
        if($(event.target).is(x)){
          $('section.sidebar').toggleClass("side");
        }
        else{
          $('section.sidebar').addClass("side");
         }
      });
    });
    $(function(){
      new WOW().init();
    });
    $(window).on('scroll', function(){
      if($(this).scrollTop() > 50 ){
        $('.header').addClass('header-fix');
      }
      else{
        $('.header').removeClass('header-fix');
      }

    });
  }

}
