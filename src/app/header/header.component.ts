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
        
        var x = $('.header-button button');
        if($(event.target).is(x)){
          $('section.sidebar').stop(true, false, true).toggleClass("side");
        }
        else{
          $('section.sidebar').stop(true, false, true).addClass("side");
         }
      });
    });
    $(function(){
      $('nav.side-nav ul li a').on('click', function(){
        $('body, html').animate({scrollTop: 0}, 500);
        $('section.sidebar').stop(true, false, true).addClass("side");
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
